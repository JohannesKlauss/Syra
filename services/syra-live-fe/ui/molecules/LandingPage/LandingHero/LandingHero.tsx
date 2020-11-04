import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/core";
import { useTranslation } from 'react-i18next';

interface Props {
  onClickSignUp: () => void;
}

function LandingHero({ onClickSignUp }: Props) {
  const { t } = useTranslation();

  return (
    <Box w={"100%"} h={"90vh"} marginTop={'72px'}>
      <Image src="/assets/landing.jpg" alt="" objectFit={"cover"} h={"100%"} w={"100%"} style={{filter: 'brightness(60%)'}}/>
      <Box position={"absolute"} top={32} left={64} w={"400px"}>
        <Text fontSize={"6xl"} fontWeight={700}>
          {t('Be creative.')}
        </Text>
        <Text fontSize={"6xl"} fontWeight={700}>
          {t('Together.')}
        </Text>
        <Text fontSize={"xl"} marginY={6} fontWeight={600}>
          {t('landingHeroText')}
        </Text>
        <Button rounded={"full"} variantColor={"cyan"} onClick={onClickSignUp}>Try for free</Button>
      </Box>
      <Box position={"absolute"} top={32} right={64} w={"400px"} textAlign={"center"} marginTop={'-20px'}>
        <Text fontSize={"112px"} fontWeight={700}>
          {t('S Y R A')}
        </Text>
        <Text fontSize={"4xl"} fontWeight={600} marginTop={'-20px'}>
          {t('Built for collaboration.')}
        </Text>
        <Text fontSize={"xl"} marginY={6} marginLeft={6} fontWeight={600} textAlign={'left'}>
          {t('Professional DAW.')}<br/>
          {t('Real time collaboration.')}<br/>
          {t('Shared sessions.')}<br/>
          {t('Versioning History.')}<br/>
          {t('Advanced AI algorithms.')}<br/>
        </Text>
      </Box>
      <IconButton icon={BsChevronCompactDown} aria-label={"scroll-down"} position={"absolute"} bottom={4} left={"50%"}
                  transform={"translateX(-50%)"} onClick={() => typeof window !== undefined && window.scrollTo({top: window.visualViewport.height - 72})}/>
    </Box>
  );
}

export default LandingHero;
