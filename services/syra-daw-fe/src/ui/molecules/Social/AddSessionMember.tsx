import React, { useEffect } from "react";
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { HiUserAdd } from "react-icons/hi";
import { useFriendsQuery } from "../../../gql/generated";
import FriendsList from "./FriendsList";

const AddSessionMember: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, refetch } = useFriendsQuery({
    skip: !isOpen,
  });

  useEffect(() => {
    (async () => {
      if (isOpen) {
        await refetch();
      }
    })();
  }, [isOpen, refetch]);

  return (
    <>
      <IconButton
        ml={4}
        aria-label={'Add member'}
        icon={<HiUserAdd />}
        colorScheme={'teal'}
        component="span"
        title={'Add member'}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add member</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FriendsList users={data?.me.friends}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSessionMember;
