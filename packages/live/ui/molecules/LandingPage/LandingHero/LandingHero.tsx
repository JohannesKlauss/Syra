import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/core";

interface Props {
  onClickSignUp: () => void;
}

function LandingHero({ onClickSignUp }: Props) {
  return (
    <Box w={"100%"} h={"90vh"} marginTop={'72px'}>
      <Image src="/assets/landing.jpg" alt="" objectFit={"cover"} h={"100%"} w={"100%"} style={{filter: 'brightness(60%)'}}/>
      <Box position={"absolute"} top={32} left={64} w={"400px"}>
        <Text fontSize={"6xl"} fontWeight={700}>
          Be creative.
        </Text>
        <Text fontSize={"6xl"} fontWeight={700}>
          Together.
        </Text>
        <Text fontSize={"xl"} marginY={6} fontWeight={600}>
          Syra empowers you to collaborate on music projects in real time.
          Creative software tools and an advanced workflow. Endless
          possibilities. Start with Syra.
        </Text>
        <Button rounded={"full"} variantColor={"cyan"} onClick={onClickSignUp}>Try for free</Button>
      </Box>
      <Box position={"absolute"} top={32} right={64} w={"400px"} textAlign={"center"} marginTop={'-20px'}>
        <Text fontSize={"112px"} fontWeight={700}>
          S Y R A
        </Text>
        <Text fontSize={"4xl"} fontWeight={600} marginTop={'-20px'}>
          Built for collaboration.
        </Text>
        <Text fontSize={"xl"} marginY={6} marginLeft={6} fontWeight={600} textAlign={'left'}>
          Professional DAW.<br/>
          No Software Downloads.<br/>
          Real time collaboration.<br/>
          Shared sessions.<br/>
          Full session history access.<br/>
          Sample and Audio FX marketplace.<br/>
        </Text>
      </Box>
      <IconButton icon={BsChevronCompactDown} aria-label={"scroll-down"} position={"absolute"} bottom={4} left={"50%"}
                  transform={"translateX(-50%)"} onClick={() => window.scrollTo({top: window.visualViewport.height - 72})}/>
    </Box>
  );
}

export default LandingHero;
