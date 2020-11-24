import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Divider, Flex, Stack, Text } from '@chakra-ui/react';
import { useMeQuery } from '../../gql/generated';
import ProfileInfo from '../../ui/molecules/Profile/ProfileInfo/ProfileInfo';
import { useTranslation } from 'react-i18next';
import LikeFeedStack from '../../ui/molecules/Feed/LikeFeedStack/LikeFeedStack';
import ProtectedRoute from '../../providers/auth/ProtectedRoute';

export default function Likes() {
  const { data, loading, error } = useMeQuery();
  const { t } = useTranslation();

  if (loading) return null;
  if (error) return null;

  return (
    <ProtectedRoute>
      <PageBox>
        <ProfileInfo user={data.me} />
        <Flex align={'center'} marginY={2}>
          <Divider flex={4} />
          <Text marginX={4} fontSize={'md'} textAlign={'center'} color={'gray.400'}>
            {t('Likes')}
          </Text>
          <Divider flex={4} />
        </Flex>
        <Stack spacing={8} w={'100%'}>
          <LikeFeedStack />
        </Stack>
      </PageBox>
    </ProtectedRoute>
  );
}
