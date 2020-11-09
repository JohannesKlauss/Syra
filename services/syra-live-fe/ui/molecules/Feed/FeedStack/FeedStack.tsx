import React from 'react';
import { Skeleton, Stack } from "@chakra-ui/core";
import FeedItem from '../FeedItem/FeedItem';
import { useMyFeedQuery } from '../../../../gql/generated';
import EmptyFeed from '../../../atoms/EmptyFeed/EmptyFeed';
import { feedStore } from '../../../../recoil/feedStore';
import useListenForRefetch from '../../../../hooks/apollo/useListenForRefetch';
import Suspendable from "../../../atoms/Suspendable/Suspendable";

interface Props {}

function FeedStack({}: Props) {
  const { data, loading, error, refetch } = useMyFeedQuery();
  useListenForRefetch(feedStore.refetchFeed, refetch);

  if (loading || error) return <Skeleton h={'85vh'}/>;

  if (data.feedItems.length === 0) {
    return <EmptyFeed />;
  }

  return (
    <Suspendable>
      <Stack spacing={8} w={'100%'}>
        {data.feedItems.map(({ id }) => (
          <FeedItem key={id} id={id} />
        ))}
      </Stack>
    </Suspendable>
  );
}

export default FeedStack;
