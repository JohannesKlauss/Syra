import React from 'react';
import { Skeleton, Stack } from '@chakra-ui/core';
import FeedItem from '../FeedItem/FeedItem';
import { useMyFeedQuery } from '../../../../gql/generated';
import EmptyFeed from "../../../atoms/EmptyFeed/EmptyFeed";

interface Props {
}

function FeedStack({}: Props) {
  const { data, loading, error } = useMyFeedQuery();

  if (loading) return <Skeleton h={24} />;
  if (error) return null;

  if (data.feedItems.length === 0) {
    return <EmptyFeed />;
  }

  return (
    <Stack spacing={8} w={'100%'}>
      {data.feedItems.map((item, i) => <FeedItem key={i} feedItem={item}/>)}
    </Stack>
  );
}

export default FeedStack;
