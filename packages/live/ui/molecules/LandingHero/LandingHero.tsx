import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/core";

interface Props {
  onClickSignUp: () => void;
}

function LandingHero({onClickSignUp}: Props) {
  return (
    <Box w={"100%"} h={"90vh"}>
      <Image src="/assets/landing.jpg" alt="" objectFit={'cover'} h={'100%'} w={'100%'}/>
      <Box position={"absolute"} top={'50%'} transform={'translateY(-50%)'} left={64} w={'400px'}>
        <Text fontSize={"6xl"}>
          Be creative.
        </Text>
        <Text fontSize={"6xl"}>
          Together.
        </Text>
        <Text fontSize={'lg'} marginY={6}>
          Syra empowers you to collaborate on music projects in real time.
          Industry-leading software tools and an advanced workflow. Endless
          possibilities. Start with Syra.
        </Text>
        <Button rounded={'full'} variantColor={'cyan'} onClick={onClickSignUp}>Try free</Button>
      </Box>
    </Box>
  );
}

export default LandingHero;
