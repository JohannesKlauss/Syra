import React, { useMemo } from 'react';
import { Avatar, AvatarBadge, AvatarProps } from '@chakra-ui/react';
import { useOnlineStatusSubscription, UserLinkFragment } from '../../../gql/generated';

interface Props extends AvatarProps {
  user: UserLinkFragment;
}

function AvatarWithOnlineStatus({ user, ...props }: Props) {
  const { data } = useOnlineStatusSubscription({ variables: { userId: user.id } });

  const isOnline = useMemo(() => {
    return data?.onlineStatus ?? user.isOnline;
  }, [user.isOnline, data?.onlineStatus]);

  return (
    <Avatar src={user.avatar} name={user.name} {...props}>
      {isOnline && <AvatarBadge bg="teal.300" boxSize="0.8em"/>}
    </Avatar>
  );
}

export default AvatarWithOnlineStatus;
