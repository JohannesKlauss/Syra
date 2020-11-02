import React from "react";
import { useFirstLevelCommentsQuery } from "../../../../gql/generated";
import { Skeleton } from "@chakra-ui/core";
import Comment from '../Comment/Comment';
import { feedStore } from "../../../../recoil/feedStore";
import { useRecoilValue } from "recoil";
import useListenForRefetch from "../../../../hooks/apollo/useListenForRefetch";

interface Props {
  feedItemId: string;
}

function CommentList({feedItemId}: Props) {
  const { data, error, loading, refetch } = useFirstLevelCommentsQuery({variables: {feedItemId}});

  useListenForRefetch(feedStore.refetchCommentList(feedItemId), refetch);


  if (loading) return <Skeleton h={8} />;
  if (error) return null;

  return (
    <>
      {data.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
