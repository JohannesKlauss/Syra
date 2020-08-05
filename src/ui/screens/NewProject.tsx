import React, { useCallback } from 'react';
import NewProjectDialog from '../organisms/dialogues/NewProjectDialog';
import useProjectSetup from '../../hooks/recoil/project/useProjectSetup';
import { ChannelType } from '../../types/Channel';
import { useHistory } from 'react-router-dom';
import { routes } from '../../const/routes';

function NewProject() {
  const setupProject = useProjectSetup();
  const history = useHistory();

  const handleCreate = useCallback(async (channelType: ChannelType, numChannels: number) => {
    await setupProject(channelType, numChannels);

    history.push(routes.Editor);
  }, [setupProject]);

  return (
    <NewProjectDialog open={true} onCreate={handleCreate} onCancel={() => window.close()}/>
  );
}

export default NewProject;
