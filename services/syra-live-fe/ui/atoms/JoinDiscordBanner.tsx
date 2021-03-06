import { Box, Button, Flex, Image, Link, Text, CloseButton, LinkOverlay } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

interface Props {}

const JoinDiscordBanner: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const [, setCookie] = useCookies(['hideJoinDiscordBanner']);

  return (
    <Flex
      w={'100%'}
      align={'center'}
      justify={'space-evenly'}
      rounded={'8px'}
      bg={'gray.900'}
      color={'gray.100'}
      boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}
      mb={8}
      p={4}
      pos={'relative'}
    >
      <Flex align={'center'} justify={'space-between'}>
        <Image src={'/assets/syra-logo.png'} alt={'Syra Live'} boxSize={'3.4rem'} />
        <Text color={'red.400'} fontSize={'5xl'} mx={8}>
          ♥
        </Text>
        <Image src={'/assets/Discord-Logo+Wordmark-Color.svg'} alt={'Discord'} width={'200px'} />
      </Flex>
      <Box justify={'flex-start'} flex={0.7}>
        <Text fontSize={'md'} fontWeight={'semibold'}>
          {t("S Y R A  is now on Discord!")}
        </Text>
        <Text fontSize={'md'} color={'gray.400'}>
          {t("Join our community to stay updated on upcoming features, tutorials, Q&A, released songs and much more.")}
        </Text>
      </Box>
      <LinkOverlay href={'https://discord.gg/PNrFs3uA'} isExternal>
        <Button colorScheme={'teal'}>Join us on Discord!</Button>
      </LinkOverlay>
      <CloseButton pos={'absolute'} top={2} right={2} onClick={() => setCookie('hideJoinDiscordBanner', true, { path: '/' })}/>
    </Flex>
  );
};

export default JoinDiscordBanner;
