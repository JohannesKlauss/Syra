import React from 'react';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Box, Flex, PseudoBox } from '@chakra-ui/core';
import ProfileBox from '../../ui/molecules/Feed/ProfileBox/ProfileBox';
import FollowRecommendationsBox from '../../ui/molecules/Feed/FollowRecommendationsBox/FollowRecommendationsBox';
import FeedStack from '../../ui/molecules/Feed/FeedStack/FeedStack';

const items = [
  {
    owner: {
      id: 2,
      name: 'Manuel Neufeld',
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
  return (
    <>
      <TopBar name={'Johannes Klauss'} hasNotifications={false} avatar={''}/>
      <PageBox>
        <Flex>
          <Box flex={'none'}>
            <PseudoBox w={'20rem'}>
              <Box pos={'fixed'}>
                <ProfileBox avatar={''} name={'Johannes Klauss'} followers={56} following={43}/>
                <FollowRecommendationsBox recommendations={[{followers: 453, name: 'Manuel Neufeld', id: 3, avatar: ''}]}/>
              </Box>
            </PseudoBox>
          </Box>
          <PseudoBox marginX={12}/>
          <FeedStack items={items}/>
        </Flex>
      </PageBox>
    </>
  );
}

Feed.getInitialProps = async () => ({
  namespacesRequired: ['default'],
})
