import React from 'react';
import { useFeedItemsByHandleQuery } from '../../../../gql/generated';
import { Skeleton } from '@chakra-ui/core';
import FeedItem from '../../Feed/FeedItem/FeedItem';

interface Props {
  handle: string;
}

function ProfileFeed({handle}: Props) {
  const { data, loading, error } = useFeedItemsByHandleQuery({variables: {handle}});

  if (loading) return <Skeleton h={24}/>
  if (error) return null;

  return (
    <>
      {data.feedItems.map(item => (
        <FeedItem feedItem={item} key={item.id}/>
      ))}
    </>
  );
}

export default ProfileFeed;
