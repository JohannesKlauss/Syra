import React from "react";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Progress } from "@chakra-ui/react";

interface Props {

}

const LoadingIndicator: React.FC<Props> = ({}) => {
  return (
    <Modal onClose={() => null} isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>S Y R A - Populating Session</ModalHeader>
        <ModalBody>
          <Progress my={4} isIndeterminate />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoadingIndicator;
