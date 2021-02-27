import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

interface Props {

}

function Stopper({}: Props) {
  const { t } = useTranslation();

  return (
    <Flex justify={'space-between'} bg={'gray.900'} paddingX={48} paddingY={6}>
      <Box flex={1}>
        <Link color={'gray.400'} href={'#'} fontSize={'sm'} marginRight={12}>{t('Legal')}</Link>
        <Link color={'gray.400'} href={'#'} fontSize={'sm'}>{t('Cookies')}</Link>
      </Box>
      <Box flex={1}>
        <Text color={'gray.400'} fontSize={'sm'} textAlign={'end'}>&copy; 2021 {t('S Y R A   Audio')}</Text>
      </Box>
    </Flex>
  );
}

export default Stopper;
