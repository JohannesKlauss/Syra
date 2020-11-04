import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Divider, Flex, Text } from "@chakra-ui/core";
import {
  useMeQuery,
  useMyFollowersQuery
} from "../../gql/generated";
import UserList from "../../ui/molecules/UserList/UserList";
import ProfileInfo from "../../ui/molecules/Profile/ProfileInfo/ProfileInfo";
import { useTranslation } from "react-i18next";
import ProtectedRoute from "../../providers/auth/ProtectedRoute";

export default function FollowingPage() {
  const { data: user, loading: isMeQueryLoading } = useMeQuery();
  const { data, error, loading } = useMyFollowersQuery();
  const { t } = useTranslation();

  if (loading || isMeQueryLoading) return null;
  if (error) return null;

  return (
    <ProtectedRoute>
      <PageBox>
        <ProfileInfo user={user.me} />
        <Flex align={'center'} marginY={2}>
          <Divider flex={4} />
          <Text marginX={4} fontSize={'md'} textAlign={'center'} color={'gray.400'}>
            {t('Following')}
          </Text>
          <Divider flex={4} />
        </Flex>
        <UserList users={data.me.followedBy} />
      </PageBox>
    </ProtectedRoute>
  );
}