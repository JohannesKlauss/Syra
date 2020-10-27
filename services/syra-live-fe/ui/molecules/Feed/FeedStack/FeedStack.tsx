import React from 'react';
import { Box, Skeleton, Stack } from '@chakra-ui/core';
import FeedItem from '../FeedItem/FeedItem';
import { TFeedItem } from '../../../../types/Feed';
import { DisplayFeedItemFragment, useMyFeedQuery } from '../../../../gql/generated';

interface Props {
}

function FeedStack({}: Props) {
  const { data, loading, error } = useMyFeedQuery();

  if (loading) return <Skeleton h={24}/>
  if (error) return null;

  return (
    <Stack spacing={8} w={'100%'}>
      {data.feedItems.map((item, i) => <FeedItem key={i} feedItem={item}/>)}
    </Stack>
  );
}

export default FeedStack;
