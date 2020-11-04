import React from "react";
import Suspendable from "../../../atoms/Suspendable/Suspendable";
import { Skeleton, Stack } from "@chakra-ui/core";
import FeedItem from "../FeedItem/FeedItem";
import EmptyFeed from "../../../atoms/EmptyFeed/EmptyFeed";
import { useMyLikesQuery } from "../../../../gql/generated";

interface Props {

}

function LikeFeedStack({}: Props) {
  const { data, error, loading } = useMyLikesQuery();

  if (loading || error) return <Skeleton h={24}/>;

  if (data.feedItemLikes.length === 0) {
    return <EmptyFeed />;
  }

  return (
    <Suspendable>
      <Stack spacing={8} w={'100%'}>
        {data.feedItemLikes.map(({ feedItemId }) => (
          <FeedItem key={feedItemId} id={feedItemId} />
        ))}
      </Stack>
    </Suspendable>
  );
}

export default LikeFeedStack;
