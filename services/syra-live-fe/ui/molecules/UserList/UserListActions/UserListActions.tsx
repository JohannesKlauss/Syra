import React from 'react';
import { Box } from '@chakra-ui/react';
import { FeedUserFragment } from '../../../../gql/generated';
import FollowAction from '../../../atoms/FollowAction/FollowAction';
import MessageAction from "../../../atoms/MessageAction/MessageAction";

interface Props {
  user: FeedUserFragment;
  isMessageButtonContracted?: boolean;
}

function UserListActions({ user, isMessageButtonContracted }: Props) {
  return (
    <Box>
      <FollowAction
        handle={user.handle}
        isMeFollowing={user.isMeFollowing}
        followingContent={<MessageAction userId={user.id} isContracted={isMessageButtonContracted}/>}
      />
    </Box>
  );
}

export default UserListActions;
