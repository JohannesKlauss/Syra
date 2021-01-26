import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Divider, Flex, Text } from "@chakra-ui/react";
import {
  useMeQuery,
  useMyProjectsQuery
} from "../../gql/generated";
import ProfileInfo from "../../ui/molecules/Profile/ProfileInfo/ProfileInfo";
import { useTranslation } from "react-i18next";
import ProtectedRoute from "../../providers/auth/ProtectedRoute";
import SessionList from '../../ui/molecules/SessionList/SessionList';

export default function SessionsPage() {
  const { data: user, loading: isMeQueryLoading } = useMeQuery();
  const { data, error, loading } = useMyProjectsQuery();
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
            {t('Sessions')}
          </Text>
          <Divider flex={4} />
        </Flex>
        <SessionList sessions={data.projects} />
      </PageBox>
    </ProtectedRoute>
  );
}