import React from "react";
import { useFirstLevelCommentsQuery } from "../../../../gql/generated";
import { Skeleton } from "@chakra-ui/core";
import Comment from '../Comment/Comment';

interface Props {
  feedItemId: string;
}

function CommentList({feedItemId}: Props) {
  const { data, error, loading } = useFirstLevelCommentsQuery({variables: {feedItemId}});

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
