import {
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useLoadProject from "../../hooks/sync/useLoadProject";

const LoadSession: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const history = useHistory();
  const {loadingProgress, isSetupFinished} = useLoadProject(id);

  useEffect(() => {
    if (isSetupFinished) {
      history.push('/editor');
    }
  }, [isSetupFinished]);

  return (
    <Modal onClose={() => null} isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>S Y R A - Loading Session</ModalHeader>
        <ModalBody>
          <Text>Loading session </Text>
          <Progress my={4} value={loadingProgress} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoadSession;
