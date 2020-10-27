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

const items = [
  {
    owner: {
      id: 2,
      name: 'Manuel Neufelds',
      email: '',
      avatar: ''
    },
    metaInfo: {
      id: 'audio-sdfsdfsd',
      timestamp: 1602691517,
      title: 'Experimental-Song #1',
      description: 'First experimentation steps with SYRA!'
    }
  },
  {
    owner: {
      id: 3,
      name: 'Martin Leibelt',
      email: '',
      avatar: ''
    },
    metaInfo: {
      id: 'audio-sdfsdfsdasd',
      timestamp: 1602541517,
      title: 'Klimperei für lang',
      description: 'Being the Klimpergung I am 👌!'
    }
  },
  {
    owner: {
      id: 4,
      name: 'Anna Blume',
      email: '',
      avatar: ''
    },
    metaInfo: {
      id: 'audio-sddasaafsdfsd',
      timestamp: 1601691517,
      title: 'New Shizzl',
      description: 'Something Something new new!'
    }
  },
  {
    owner: {
      id: 5,
      name: 'Hafti-Babi',
      email: '',
      avatar: ''
    },
    metaInfo: {
      id: 'audio-sdfsdfsdasddsads',
      timestamp: 1601241517,
      title: 'KaDeWe',
      description: 'Hart am flexen, Brudi!'
    }
  }
];

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
            <FeedStack items={items}/>
          </Box>
        </Flex>
      </PageBox>
      <Footer/>
      <Stopper/>
    </>
  );
}

Feed.getInitialProps = async () => ({
  namespacesRequired: ['default'],
});

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MeDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}