import React from 'react';
import { Box, Flex, IconButton, List, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { FiRefreshCw } from 'react-icons/fi';
import { useFollowRecommendationsQuery } from '../../../../gql/generated';
import RecommendationList from './RecommendationList/RecommendationList';
import { NetworkStatus } from '@apollo/client';

interface Props {}

function FollowRecommendationsBox({}: Props) {
  const { data, error, refetch, networkStatus } = useFollowRecommendationsQuery();
  const { t } = useTranslation();

  return (
    <Box
      overflow={'hidden'}
      rounded={8}
      bg={'gray.900'}
      w={'100%'}
      boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}
      paddingX={8}
    >
      <Flex justify={'space-between'} align={'center'} paddingY={4}>
        <Text fontWeight={700} fontSize={'lg'}>
          {t('People to follow')}
        </Text>
        <IconButton
          icon={FiRefreshCw}
          aria-label={t('Refresh people to follow')}
          onClick={() => refetch()}
          isLoading={networkStatus === NetworkStatus.refetch}
        />
      </Flex>
      <Box marginTop={'0.75rem'}>
        {error && (
          <Flex justify={'center'} align={'center'} py={4}>
            <Text fontWeight={600} fontSize={'sm'}>
              {t('There was an error fetching recommendations.')}
            </Text>
          </Flex>
        )}
        {data && !error && (
          <List spacing={3}>
            <RecommendationList recommendations={data.followRecommendations} />
          </List>
        )}
      </Box>
    </Box>
  );
}

export default FollowRecommendationsBox;
