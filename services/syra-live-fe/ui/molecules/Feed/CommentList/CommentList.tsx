import React, { useMemo } from "react";
import { useFirstLevelCommentsQuery, useNewCommentSubscription } from "../../../../gql/generated";
import Comment from '../Comment/Comment';
import { feedStore } from "../../../../recoil/feedStore";
import useListenForRefetch from "../../../../hooks/apollo/useListenForRefetch";
import useSuspendableQuery from "../../../../hooks/apollo/useSuspendableQuery";

interface Props {
  feedItemId: string;
}

function CommentList({feedItemId}: Props) {
  const { data, refetch } = useSuspendableQuery(useFirstLevelCommentsQuery({variables: {feedItemId}}));
  useListenForRefetch(feedStore.refetchCommentList(feedItemId), refetch);

  const { data: newCommentData } = useNewCommentSubscription({variables: {feedItemId}});

  const comments = useMemo(() => {
    return data.comments.concat(newCommentData?.newComment ?? []);
  }, [data?.comments, newCommentData?.newComment]);

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
