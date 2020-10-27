import React from 'react';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Box, Flex, PseudoBox } from '@chakra-ui/core';
import ProfileBox from '../../ui/molecules/Feed/ProfileBox/ProfileBox';
import FollowRecommendationsBox from '../../ui/molecules/Feed/FollowRecommendationsBox/FollowRecommendationsBox';
import FeedStack from '../../ui/molecules/Feed/FeedStack/FeedStack';
import Footer from '../../ui/atoms/Footer/Footer';
import Stopper from '../../ui/atoms/Stopper/Stopper';
import CreateFeedItem from '../../ui/molecules/Feed/CreateFeedItem/CreateFeedItem';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../apollo/client';
import { MeDocument, useMeQuery } from '../../gql/generated';
import { useRouter } from 'next/router';

export default function Feed() {
  const { data, error, loading } = useMeQuery();
  const { push } = useRouter();

  if (loading) return null;
  if (error || data.me == null) push('/');

  return (
    <>
      <TopBar/>
      <PageBox>
        <Flex>
          <Box flex={'none'}>
            <PseudoBox w={'20rem'}>
              <Box pos={'fixed'}>
                <ProfileBox/>
                <FollowRecommendationsBox recommendations={[{followers: 453, name: 'Manuel Neufeld', id: 3, avatar: ''}]}/>
              </Box>
            </PseudoBox>
          </Box>
          <PseudoBox marginX={12}/>
          <Box w={'100%'}>
            <CreateFeedItem/>
            <FeedStack/>
          </Box>
        </Flex>
      </PageBox>
      <Footer/>
      <Stopper/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo(null, context.req.headers.cookie);

  await apolloClient.query({
    query: MeDocument,
  });

  return {
    props: {
      namespacesRequired: ['default'],
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}