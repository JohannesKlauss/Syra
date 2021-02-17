import {
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLoadProject from "../../hooks/sync/useLoadProject";
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";
import { audioSetup } from '../../audioSetup';

const LoadSession: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const [showStartButton, setShowStartButton] = useState(false);
  const setProjectId = useSetRecoilState(projectStore.id);
  const setIsSetupFinished = useSetRecoilState(projectStore.isSetupFinished);
  const setIsEngineRunning = useSetRecoilState(projectStore.isEngineRunning);

  const {loadingProgress, projectData} = useLoadProject(id);

  useEffect(() => {
    if (Math.ceil(loadingProgress) >= 100 && projectData !== undefined && projectData.project?.id !== undefined) {
      setProjectId(projectData.project.id);
      setShowStartButton(true);
    }
  }, [loadingProgress, projectData, setProjectId, setShowStartButton]);

  const onClickOpen = async () => {
    await audioSetup();

    setIsEngineRunning(true);
    setIsSetupFinished(true);
  }

  return (
    <Modal onClose={() => null} isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>S Y R A - Loading Session</ModalHeader>
        <ModalBody>
          <Text>{!showStartButton ? 'Loading session' : `Session "${projectData?.project?.name}" loaded.`}</Text>
          <Progress my={4} isIndeterminate={!showStartButton} value={loadingProgress} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} disabled={!showStartButton} onClick={onClickOpen}>
            Open Session
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoadSession;
