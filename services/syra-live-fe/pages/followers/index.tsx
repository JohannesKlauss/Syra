import React from 'react';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Divider, Flex, Text } from "@chakra-ui/core";
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../apollo/client';
import {
  MeDocument,
  MyFollowersDocument,
  useMeQuery,
  useMyFollowersQuery
} from "../../gql/generated";
import UserList from "../../ui/molecules/UserList/UserList";
import ProfileInfo from "../../ui/molecules/Profile/ProfileInfo/ProfileInfo";
import { useTranslation } from "react-i18next";

export default function FollowingPage() {
  const { data: user, loading: isMeQueryLoading } = useMeQuery();
  const { data, error, loading } = useMyFollowersQuery();
  const { t } = useTranslation();

  if (loading || isMeQueryLoading) return null;
  if (error) return null;

  return (
    <>
      <TopBar />
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo(null, context.req.headers.cookie);

  await apolloClient.query({
    query: MeDocument,
  });

  await apolloClient.query({
    query: MyFollowersDocument,
  });

  return {
    props: {
      namespacesRequired: ['default'],
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}