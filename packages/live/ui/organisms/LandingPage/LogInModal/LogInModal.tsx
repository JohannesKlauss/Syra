import React from "react";
import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, Text
} from "@chakra-ui/core";
import SocialSignUp from "../../../molecules/LandingPage/SocialSignUp/SocialSignUp";
import LogInForm from "../../../molecules/LandingPage/LogInForm/LogInForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onClickSwitchToSignUp: () => void;
}

function LogInModal({onClickSwitchToSignUp, onClose, isOpen}: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay opacity={0.7}/>
      <ModalContent pb={5}>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <LogInForm/>
          <Flex align={"center"} marginY={2}>
            <Divider flex={1}/>
            <Text flex={1} fontSize={"md"} textAlign={"center"}>or continue with</Text>
            <Divider flex={1}/>
          </Flex>
          <SocialSignUp buttonSize={"lg"} fontSize={"2xl"} onClick={() => null}/>
          <Flex align={"center"} justify={"center"}>
            <Text fontSize={"sm"} textAlign={"center"}>
              Don't have an account?
              <Button
                variant={"link"}
                size={"sm"} marginLeft={2}
                variantColor={"teal"}
                onClick={onClickSwitchToSignUp}
              >
                Sign Up.
              </Button>
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LogInModal;
