import React, { useCallback } from 'react';
import NewProjectDialog from '../organisms/dialogues/NewProjectDialog';
import useProjectSetup from '../../hooks/recoil/project/useProjectSetup';
import { ChannelType } from '../../types/Channel';
import { useHistory, useParams } from "react-router-dom";
import { routes } from '../../const/routes';
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";

function NewProject() {
  const setupProject = useProjectSetup();
  const setProjectId = useSetRecoilState(projectStore.id);
  const setIsSetupFinished = useSetRecoilState(projectStore.isSetupFinished);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleCreate = useCallback(async (channelType: ChannelType, numChannels: number) => {
    await setupProject(channelType, numChannels);

    setProjectId(id);
    setIsSetupFinished(true);

    history.push(routes.EditorShell.replace(':id', id));
  }, [setupProject, history, setProjectId, id, setIsSetupFinished]);

  return (
    <NewProjectDialog open={true} onCreate={handleCreate} onCancel={() => window.close()}/>
  );
}

export default NewProject;
