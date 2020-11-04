import React from 'react';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Divider, Flex, Stack, Text } from "@chakra-ui/core";
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../apollo/client';
import { MeDocument, MyLikesDocument, useMeQuery, useMyLikesQuery } from "../../gql/generated";
import ProfileInfo from "../../ui/molecules/Profile/ProfileInfo/ProfileInfo";
import { useTranslation } from "react-i18next";
import FeedItem from "../../ui/molecules/Feed/FeedItem/FeedItem";

export default function Likes() {
  const { data: user, loading: isMeQueryLoading } = useMeQuery();
  const { data, error, loading } = useMyLikesQuery();
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
            {t('Likes')}
          </Text>
          <Divider flex={4} />
        </Flex>
        <Stack spacing={8} w={'100%'}>
          {data.feedItemLikes.map(({ feedItemId }) => (
            <FeedItem key={feedItemId} id={feedItemId} />
          ))}
        </Stack>
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
    query: MyLikesDocument,
  });

  return {
    props: {
      namespacesRequired: ['default'],
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}