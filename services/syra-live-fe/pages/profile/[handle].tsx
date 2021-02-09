import React from 'react';
import { useRouter } from 'next/router';
import { useUserProfileByHandleQuery } from '../../gql/generated';
import ProfileInfo from '../../ui/molecules/Profile/ProfileInfo/ProfileInfo';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import ProfileFeed from '../../ui/molecules/Profile/ProfileFeed/ProfileFeed';
import { Divider, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ProtectedRoute from "../../providers/auth/ProtectedRoute";

export default function Profile() {
  const router = useRouter()
  const { t } = useTranslation();
  const { handle } = router.query;

  const { data, loading, error } = useUserProfileByHandleQuery({
    variables: {
      handle: handle as string,
    }
  });

  if (error) return null;
  if (loading) return null;

  return (
    <ProtectedRoute>
      <PageBox>
        <ProfileInfo user={data.user}/>
        <Flex align={"center"} marginY={2}>
          <Divider flex={4}/>
          <Text marginX={4} fontSize={"md"} textAlign={"center"} color={'gray.400'}>{t('Feed')}</Text>
          <Divider flex={4}/>
        </Flex>
        <ProfileFeed handle={data.user.handle}/>
      </PageBox>
    </ProtectedRoute>
  );
}