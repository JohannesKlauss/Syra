import {
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
} from '@chakra-ui/react';
import React from "react";
import { useParams } from "react-router-dom";
import useLoadProject from "../../hooks/sync/useLoadProject";

const LoadSession: React.FC = () => {
  const {id} = useParams<{id: string}>();

  useLoadProject(id);

  return (
    <Modal onClose={() => null} isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>S Y R A - Loading Session</ModalHeader>
        <ModalBody>
          <Text>Loading session </Text>
          <Progress my={4} isIndeterminate />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoadSession;
