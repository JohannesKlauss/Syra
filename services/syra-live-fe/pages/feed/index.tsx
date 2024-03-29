import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { Box, Flex } from '@chakra-ui/react';
import ProfileBox from '../../ui/molecules/Feed/ProfileBox/ProfileBox';
import FollowRecommendationsBox from '../../ui/molecules/Feed/FollowRecommendationsBox/FollowRecommendationsBox';
import FeedStack from '../../ui/molecules/Feed/FeedStack/FeedStack';
import CreateFeedItem from '../../ui/molecules/Feed/CreateFeedItem/CreateFeedItem';
import ProtectedRoute from '../../providers/auth/ProtectedRoute';
import JoinDiscordBanner from '../../ui/atoms/JoinDiscordBanner';
import { useCookies } from 'react-cookie';
import { parseCookies } from '../../helpers';

function Feed({serverCookies}) {
  const [cookie] = useCookies(['hideJoinDiscordBanner']);

  return (
    <ProtectedRoute>
      <PageBox>
        {!(Boolean(cookie.hideJoinDiscordBanner) || Boolean(serverCookies.hideJoinDiscordBanner)) && <JoinDiscordBanner />}
        <Flex minH={'100vh'}>
          <Box flex={'none'}>
            <Box w={'24rem'} pos={'sticky'} top={'120px'}>
              <Box>
                <ProfileBox />
                <FollowRecommendationsBox />
              </Box>
            </Box>
          </Box>
          <Box marginX={6} />
          <Box w={'100%'}>
            <CreateFeedItem />
            <FeedStack />
          </Box>
        </Flex>
      </PageBox>
    </ProtectedRoute>
  );
}

Feed.getInitialProps = async ({ req }) => {
  return {
    serverCookies: parseCookies(req),
  };
};

export default Feed;
