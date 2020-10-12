import React from "react";
import { Box, Text } from "@chakra-ui/core";

interface Props {
  py: number
}

function LandingClaim({py}: Props) {
  return (
    <>
      <Box textAlign={'center'} px={64} py={py}>
        <Text fontSize={'5xl'} fontWeight={700}>CREATE AND COLLABORATE</Text>
      </Box>
      <Box textAlign={'center'} px={'20%'}>
        <Text fontSize={'lg'} color={'gray.400'}>
          Syra is a professional fully fledged collaborative DAW for the browser.
          It provides cutting edge tools and technologies to produce the music you want.
          Share your sessions with your friends and colleagues and collaborate on ideas no matter
          where you live. Whether you are just starting out or a professional: Syra has
          all the tools needed to turn your ideas into music and your band into production.
        </Text>
      </Box>
    </>
  );
}

export default LandingClaim;
