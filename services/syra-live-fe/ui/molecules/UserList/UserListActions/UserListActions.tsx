import React from 'react';
import { Box } from '@chakra-ui/core';
import { FeedUserFragment } from '../../../../gql/generated';
import FollowAction from '../../../atoms/FollowAction/FollowAction';
import MessageAction from "../../../atoms/MessageAction/MessageAction";

interface Props {
  user: FeedUserFragment;
}

function UserListActions({ user }: Props) {
  return (
    <Box>
      <FollowAction
        handle={user.handle}
        isMeFollowing={user.isMeFollowing}
        followingContent={<MessageAction userId={user.id}/>}
      />
    </Box>
  );
}

export default UserListActions;
