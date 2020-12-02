import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

interface Props {
  py: number
}

function LandingClaim({py}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box textAlign={'center'} px={64} py={py}>
        <Text fontSize={'5xl'} fontWeight={700}>{t('CREATE AND COLLABORATE')}</Text>
      </Box>
      <Box textAlign={'center'} px={'20%'}>
        <Text fontSize={'lg'} color={'gray.400'}>
          {t('landingClaimText')}
        </Text>
      </Box>
    </>
  );
}

export default LandingClaim;
