import React, { useCallback, useEffect } from "react";
import NewProjectDialog from '../organisms/dialogues/NewProjectDialog';
import useProjectSetup from '../../hooks/recoil/project/useProjectSetup';
import { ChannelType } from '../../types/Channel';
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";
import { useUpdateNameMutation } from "../../gql/generated";
import { audioSetup } from "../../audioSetup";
import { routes } from "../../const/routes";

function NewProject() {
  const { id } = useParams<{ id: string }>();
  const setupProject = useProjectSetup();
  const setProjectId = useSetRecoilState(projectStore.id);
  const setIsSetupFinished = useSetRecoilState(projectStore.isSetupFinished);
  const setIsEngineRunning = useSetRecoilState(projectStore.isEngineRunning);
  const name = useRecoilValue(projectStore.name);
  const history = useHistory();

  const [executeMutation] = useUpdateNameMutation({
    variables: {
      projectId: id,
      name,
    }
  });

  useEffect(() => {
    setProjectId(id);
  }, []);

  const handleCreate = useCallback(async (channelType: ChannelType, numChannels: number) => {
    await executeMutation();
    await audioSetup();

    setIsEngineRunning(true);

    await setupProject(channelType, numChannels);

    setIsSetupFinished(true);

    history.push(routes.EditorShell.replace(':id', id));
  }, [setupProject, history, setProjectId, id, setIsSetupFinished, executeMutation, setIsEngineRunning]);

  return (
    <NewProjectDialog open={true} onCreate={handleCreate} onCancel={() => window.close()}/>
  );
}

export default NewProject;
