import React from "react";
import { Flex, IconButton } from "@chakra-ui/core";
import { FaFacebook, FaGoogle, FaSoundcloud, FaSpotify, FaTwitter, FaInstagram } from "react-icons/fa";
import * as StyledSystem from "styled-system";
import { SignInUpType } from "../../../types/SocialSign";

interface Props {
  onClick: (type: SignInUpType) => void;
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

function SocialSignUp({ fontSize, buttonSize, onClick }: Props) {
  return (
    <Flex justify={"space-between"} marginY={4}>
      <IconButton onClick={() => onClick(SignInUpType.GOOGLE)} size={buttonSize} aria-label={"google-sign-up"}
                  icon={FaGoogle} fontSize={fontSize}/>
      <IconButton onClick={() => onClick(SignInUpType.FACEBOOK)} size={buttonSize} aria-label={"facebook-sign-up"}
                  icon={FaFacebook} fontSize={fontSize}/>
      <IconButton onClick={() => onClick(SignInUpType.TWITTER)} size={buttonSize} aria-label={"twitter-sign-up"}
                  icon={FaTwitter} fontSize={fontSize}/>
      <IconButton onClick={() => onClick(SignInUpType.INSTAGRAM)} size={buttonSize} aria-label={"instagram-sign-up"}
                  icon={FaInstagram} fontSize={fontSize}/>
      <IconButton onClick={() => onClick(SignInUpType.SOUNDCLOUD)} size={buttonSize} aria-label={"soundcloud-sign-up"}
                  icon={FaSoundcloud} fontSize={fontSize}/>
      <IconButton onClick={() => onClick(SignInUpType.SPOTIFY)} size={buttonSize} aria-label={"spotify-sign-up"}
                  icon={FaSpotify} fontSize={fontSize}/>
    </Flex>
  );
}

export default SocialSignUp;
