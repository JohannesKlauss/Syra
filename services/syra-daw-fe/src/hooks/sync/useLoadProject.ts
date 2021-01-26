import { useMeQuery, useProjectQuery } from "../../gql/generated";
import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";
import useDocumentTitle from "../ui/useDocumentTitle";

const steps = 2;

export default function useLoadProject(id: string) {
  const [isSetupFinished, setIsSetupFinished] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const {data: meData, loading: meLoading} = useMeQuery();
  const {data: projectData, loading: projectLoading} = useProjectQuery({
    variables: {
      id,
    }
  });

  const setProjectId = useSetRecoilState(projectStore.id);
  const setProjectName = useSetRecoilState(projectStore.name);

  const setDocumentTitle = useDocumentTitle();
  const increase = useCallback(() => setLoadingProgress(prevState => prevState + 100 / steps), [setLoadingProgress]);

  useEffect(() => {
    if (!meLoading && meData?.me) {
      increase();
    }
  }, [meData, meLoading, increase]);

  useEffect(() => {
    if (!projectLoading && projectData?.project) {
      setProjectId(projectData.project.id);
      setProjectName(projectData.project.name);
      setDocumentTitle(`S Y R A - ${projectData.project.name}`);
      increase();
    }
  }, [projectData, projectLoading, increase, setDocumentTitle]);

  useEffect(() => {
    if (Math.ceil(loadingProgress) >= 100) {
      setIsSetupFinished(true);
    }
  }, [loadingProgress, setIsSetupFinished]);

  return {loadingProgress, isSetupFinished};
}