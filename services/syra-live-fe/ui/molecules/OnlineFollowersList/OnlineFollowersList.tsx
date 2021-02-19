import React from 'react';
import { AvatarGroup } from '@chakra-ui/react';
import { useMyFriendsQuery } from '../../../gql/generated';
import AvatarWithOnlineStatus from '../Avatar/AvatarWithOnlineStatus';

interface Props {}

const OnlineFollowersList: React.FC<Props> = ({}) => {
  const { data, loading } = useMyFriendsQuery();

  return (
    <AvatarGroup size="sm" spacing={-2} max={12}>
      {!loading && data && data.me.friends.map((friend) => <AvatarWithOnlineStatus key={friend.id} user={friend} />)}
    </AvatarGroup>
  );
};

export default OnlineFollowersList;
