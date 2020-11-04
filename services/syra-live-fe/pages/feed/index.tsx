import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Box, Flex, PseudoBox } from '@chakra-ui/core';
import ProfileBox from '../../ui/molecules/Feed/ProfileBox/ProfileBox';
import FollowRecommendationsBox from '../../ui/molecules/Feed/FollowRecommendationsBox/FollowRecommendationsBox';
import FeedStack from '../../ui/molecules/Feed/FeedStack/FeedStack';
import CreateFeedItem from '../../ui/molecules/Feed/CreateFeedItem/CreateFeedItem';
import ProtectedRoute from "../../providers/auth/ProtectedRoute";

export default function Feed() {
  return (
    <ProtectedRoute>
      <PageBox>
        <Flex>
          <Box flex={'none'}>
            <PseudoBox w={'20rem'}>
              <Box pos={'fixed'} w={'24rem'}>
                <ProfileBox />
                <FollowRecommendationsBox />
              </Box>
            </PseudoBox>
          </Box>
          <PseudoBox marginX={12} />
          <Box w={'100%'}>
            <CreateFeedItem />
            <FeedStack />
          </Box>
        </Flex>
      </PageBox>
    </ProtectedRoute>
  );
}