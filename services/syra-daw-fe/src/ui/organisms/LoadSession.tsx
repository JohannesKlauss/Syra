import { Text, Button, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLoadProject from "../../hooks/sync/useLoadProject";
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";
import { audioSetup } from '../../audioSetup';
import LoadingScreen from '../atoms/LoadingScreen';

const LoadSession: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const [showStartButton, setShowStartButton] = useState(false);
  const setProjectId = useSetRecoilState(projectStore.id);
  const setIsSetupFinished = useSetRecoilState(projectStore.isSetupFinished);
  const setIsEngineRunning = useSetRecoilState(projectStore.isEngineRunning);

  const {projectData} = useLoadProject(id);

  useEffect(() => {
    if (projectData !== undefined && projectData.project?.id !== undefined) {
      setProjectId(projectData.project.id);
      setShowStartButton(true);
    }
  }, [projectData, setProjectId, setShowStartButton]);

  const onClickOpen = async () => {
    await audioSetup();

    setIsEngineRunning(true);
    setIsSetupFinished(true);
  }

  return (
    <LoadingScreen isLoading={!showStartButton}>
      <Flex flexDir={'column'} justify={'center'} align={'center'} mt={4}>
        <Text>{!showStartButton ? 'Loading session' : `${projectData?.project?.name} loaded.`}</Text>

        <Button colorScheme="teal" mr={3} disabled={!showStartButton} onClick={onClickOpen} mt={4}>
          Open Session
        </Button>
      </Flex>
    </LoadingScreen>
  );
};

export default LoadSession;
