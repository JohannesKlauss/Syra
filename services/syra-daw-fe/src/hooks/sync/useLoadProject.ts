import { useMeQuery, useProjectQuery } from "../../gql/generated";
import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";
import useDocumentTitle from "../ui/useDocumentTitle";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { routes } from "../../const/routes";
import { populateFromDb } from "../../recoil/effects/loadInitialState";

const steps = 4;

// TODO: THIS HAS TO BE WAY CLEANER. FOR NOW IT'S OKAY, BUT AS LOADING COMPLEXITY GROWS WE HAVE TO MODULARIZE THIS.
export default function useLoadProject(id: string) {
  const toast = useToast();
  const history = useHistory();

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
    if (!projectLoading && !meLoading && projectData?.project && meData?.me) {
      setProjectId(projectData.project.id);
      setProjectName(projectData.project.name);
      setDocumentTitle(`S Y R A - ${projectData.project.name}`);
      increase();

      if (projectData.project.owner.id !== meData.me.id) {
        if (projectData.project.members?.find(member => member.user.id === meData.me.id) !== undefined) {
          if (!projectData.project.isInitialized) {
            console.log('project not initialized');
            /*toast({
              title: "Session not initialized.",
              description: `Seems like ${projectData.project.owner.name} has not yet initialized the session. You cannot open the session until then.`,
              status: "warning",
              isClosable: false,
            });*/
          } else {
            increase();

            populateFromDb(projectData.project.content);

            increase();
          }
        } else {
          console.log('No access to load project.');
          /*toast({
            title: "Access not granted.",
            description: `You don't have access to this session. If this is an error please contact the owner of the session.`,
            status: "error",
            isClosable: false,
          });*/
        }
      } else {
        increase();

        if (!projectData.project.isInitialized) {
          history.push(routes.NewProject);
        } else {
          populateFromDb(projectData.project.content);

          increase();
        }
      }
    } else if (projectData === undefined) {
      console.log('unable to load project.');
      /*toast({
        title: "Unable to load project.",
        description: `There was an error loading the project. Please try again later.`,
        status: "error",
        isClosable: false,
      });*/
    }
  }, [projectData, meData, projectLoading, meLoading, increase, setDocumentTitle, toast]);

  useEffect(() => {
    if (Math.ceil(loadingProgress) >= 100) {
      setIsSetupFinished(true);
    }
  }, [loadingProgress, setIsSetupFinished]);

  return {loadingProgress, isSetupFinished};
}