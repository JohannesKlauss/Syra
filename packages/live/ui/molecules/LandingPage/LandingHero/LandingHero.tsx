import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/core";

interface Props {
  onClickSignUp: () => void;
}

function LandingHero({onClickSignUp}: Props) {
  return (
    <Box w={"100%"} h={"90vh"}>
      <Image src="/assets/landing.jpg" alt="" objectFit={'cover'} h={'100%'} w={'100%'}/>
      <Box position={"absolute"} top={32} left={64} w={'400px'}>
        <Text fontSize={"6xl"} fontWeight={700}>
          Be creative.
        </Text>
        <Text fontSize={"6xl"} fontWeight={700}>
          Together.
        </Text>
        <Text fontSize={'xl'} marginY={6} fontWeight={600}>
          Syra empowers you to collaborate on music projects in real time.
          Creative software tools and an advanced workflow. Endless
          possibilities. Start with Syra.
        </Text>
        <Button rounded={'full'} variantColor={'cyan'} onClick={onClickSignUp}>Try for free</Button>
      </Box>
      <Box position={"absolute"} top={32} right={64} w={'400px'} textAlign={'center'}>
        <Text fontSize={"112px"} fontWeight={700}>
          S Y R A
        </Text>
        <Text fontSize={"4xl"} fontWeight={600}>
          Built for collaboration.
        </Text>
      </Box>
    </Box>
  );
}

export default LandingHero;
