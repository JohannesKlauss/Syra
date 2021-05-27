import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import { useVersionsQuery } from "../../../gql/generated";
import marked from 'marked';

const VersionInformation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {data} = useVersionsQuery();

  return (
    <>
      <Button variant={'link'} colorScheme={'gray'} color={'gray.500'} size={'xs'} onClick={onOpen}>S Y R A - 0.0.18</Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'} size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>S Y R A - 0.0.18</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {data && data.versionInformations.map(info => (
              <div className={'markdown-body'} key={info.id} dangerouslySetInnerHTML={{__html: marked(info.description)}}/>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VersionInformation;
