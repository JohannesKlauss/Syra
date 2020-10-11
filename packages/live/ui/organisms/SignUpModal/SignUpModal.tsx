import React from "react";
import {
  Button, Divider, Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/core";
import SocialSignUp from "../../molecules/SocialSignUp/SocialSignUp";
import SignUpForm from "../../molecules/SignUpForm/SignUpForm";
import { useTranslation } from "../../../i18n";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onClickSwitchToLogin: () => void;
}

function SignUpModal({ isOpen, onClose, onClickSwitchToLogin }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay opacity={0.7}/>
      <ModalContent pb={5}>
        <ModalHeader>Create an Account</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <SignUpForm/>
          <Flex align={"center"} marginY={2}>
            <Divider flex={1}/>
            <Text flex={1} fontSize={"md"} textAlign={"center"}>or continue with</Text>
            <Divider flex={1}/>
          </Flex>
          <SocialSignUp buttonSize={"lg"} fontSize={"2xl"}/>
          <Flex align={"center"} justify={"center"}>
            <Text fontSize={"sm"} textAlign={"center"}>
              Have an account?
              <Button
                variant={"link"}
                size={"sm"} marginLeft={2}
                variantColor={"teal"}
                onClick={onClickSwitchToLogin}
              >
                Log In.
              </Button>
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignUpModal;
