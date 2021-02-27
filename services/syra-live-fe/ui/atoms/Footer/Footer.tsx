import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

interface Props {

}

function Footer({}: Props) {
  const { t } = useTranslation();

  return (
    <Flex bg={'gray.700'} paddingX={48} paddingY={24}>
      <Box flex={1}>
        <Text fontWeight={700} marginBottom={4}>{t('S Y R A')}</Text>
        <Link color={'gray.500'} href={'#'} display={'block'}>{t('First Steps')}</Link>
        <Link color={'gray.500'} href={'#'} display={'block'}>{t('Video Tutorials')}</Link>
        <Link color={'gray.500'} href={'#'} display={'block'}>{t('Documentation')}</Link>
        <Link color={'gray.500'} href={'#'} display={'block'}>{t('Marketplace')}</Link>
      </Box>
      <Box flex={2}>
        <Flex justify={'space-between'}>
          <Box>
            <Text fontWeight={700} marginBottom={4}>{t('Features')}</Text>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Music Creation')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Collaboration')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Web Audio Technologies')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Maastr.io')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Download Apps')}</Link>
          </Box>
          <Box>
            <Text fontWeight={700} marginBottom={4}>{t('Community')}</Text>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Blog')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Instagram')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Facebook')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Twitter')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Discord')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Help')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Music Rights')}</Link>
          </Box>
          <Box>
            <Text fontWeight={700} marginBottom={4}>{t('Company')}</Text>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('About Us')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Store')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Career')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Press')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Terms of Use')}</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>{t('Privacy Policy')}</Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
