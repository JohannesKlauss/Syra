import React, { useEffect } from "react";
import { Skeleton, Stack } from '@chakra-ui/core';
import FeedItem from '../FeedItem/FeedItem';
import { useMyFeedQuery } from '../../../../gql/generated';
import EmptyFeed from "../../../atoms/EmptyFeed/EmptyFeed";
import { feedStore } from "../../../../recoil/feedStore";
import { useRecoilState } from "recoil";
import useListenForRefetch from "../../../../hooks/apollo/useListenForRefetch";

interface Props {
}

function FeedStack({}: Props) {
  const { data, loading, error, refetch } = useMyFeedQuery();
  useListenForRefetch(feedStore.refetchFeed, refetch);

  if (loading) return <Skeleton h={24} />;
  if (error) return null;

  if (data.feedItems.length === 0) {
    return <EmptyFeed />;
  }

  return (
    <Stack spacing={8} w={'100%'}>
      {data.feedItems.map(({ id }) => <FeedItem key={id} id={id} />)}
    </Stack>
  );
}

export default FeedStack;
