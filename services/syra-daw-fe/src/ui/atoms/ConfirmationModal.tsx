import React from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

interface Props {
  title: string;
  onClose: (confirmed?: boolean) => void;
  isOpen: boolean;
}

const ConfirmationModal: React.FC<Props> = ({onClose, isOpen, children}) => {
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => onClose(true)}>
              Delete
            </Button>
            <Button variant="ghost" onClick={() => onClose(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
};

export default ConfirmationModal;
