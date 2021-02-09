import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import PricingTier, { PricingTierProps } from '../../../atoms/LandingPage/PricingTier/PricingTier';
import { useTranslation } from 'react-i18next';

interface Props {
  tiers: PricingTierProps[];
}

function Pricing({ tiers }: Props) {
  const { t } = useTranslation();

  return (
    <Flex align={'space-around'} marginY={12} marginX={32}>
      <Box flex={1} paddingRight={8}>
        <Text fontSize={'6xl'} fontWeight={700}>{t('S Y R A')}</Text>
        <Text fontSize={'2xl'} fontWeight={600} marginY={12}>
          {t('SYRA is available in three different editions:')}<br/>
          {t('The essentials packages has everything you need to get you started.')}<br/>
          {t('If you need more tracks and more collaboration features, Standard might be for you.')}<br/>
          {t('For the full experience get the Studio package to enable all features that make SYRA the number one online collaborative DAW.')}
        </Text>
        <Text fontWeight={400} marginTop={12} marginBottom={8}>{t('Do you need more information to decide?')}</Text>
        <Button colorScheme={'cyan'} rounded={'full'} size={'lg'}>{t('Check our FAQ')}</Button>
      </Box>
      <Box flex={1}>
        <div>
          <Flex justify={'space-between'}>
            {tiers.map((tier, i) => <PricingTier {...tier} key={i}/>)}
          </Flex>
        </div>
      </Box>
    </Flex>
  );
}

export default Pricing;
