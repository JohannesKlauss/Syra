import React from "react";
import { Flex, IconButton } from "@chakra-ui/core";
import { FaGoogle, FaSoundcloud, FaFacebook, FaSpotify, FaTwitter } from "react-icons/fa";
import * as StyledSystem from "styled-system";

interface Props {
  buttonSize: "xs" | "sm" | "md" | "lg";
  fontSize:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | StyledSystem.FontSizeProps["fontSize"]
}

function SocialSignUp({ fontSize, buttonSize }: Props) {
  return (
    <Flex justify={"space-between"} marginY={4}>
      <IconButton size={buttonSize} aria-label={"google-sign-up"} icon={FaGoogle} fontSize={fontSize}/>
      <IconButton size={buttonSize} aria-label={"facebook-sign-up"} icon={FaFacebook} fontSize={fontSize}/>
      <IconButton size={buttonSize} aria-label={"twitter-sign-up"} icon={FaTwitter} fontSize={fontSize}/>
      <IconButton size={buttonSize} aria-label={"soundcloud-sign-up"} icon={FaSoundcloud} fontSize={fontSize}/>
      <IconButton size={buttonSize} aria-label={"spotify-sign-up"} icon={FaSpotify} fontSize={fontSize}/>
    </Flex>
  );
}

export default SocialSignUp;
