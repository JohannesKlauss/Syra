import React from 'react';
import { Box, Flex, List, ListItem, Text, Link as ChakraLink, AvatarGroup } from '@chakra-ui/react';
import Link from 'next/link';
import { SessionListDataFragment } from '../../../gql/generated';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import publicRuntimeConfig from '../../../const/config';
import AvatarWithOnlineStatus from '../Avatar/AvatarWithOnlineStatus';

interface Props {
  sessions: SessionListDataFragment[];
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const SessionList: React.FC<Props> = ({ sessions, size }) => {
  return (
    <List spacing={3}>
      {sessions.map((session) => (
        <ListItem key={session.id}>
          <Flex justify={'flex-start'} align={'center'}>
            <Flex align={'center'}>
              <Box ml={4}>
                <Link passHref href={`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/editor/${session.id}`}>
                  <ChakraLink fontWeight={600} fontSize={size} target={'_blank'}>
                    {session.name}
                  </ChakraLink>
                </Link>
                <Text fontSize={size}>{formatDistanceToNow(fromUnixTime(session.createdAt / 1000))}</Text>
              </Box>
            </Flex>
            <AvatarGroup size="sm" spacing={-2} max={6} ml={4}>
              {session.members.map(({ user }) => (
                <AvatarWithOnlineStatus key={user.id} user={user} />
              ))}
            </AvatarGroup>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default SessionList;
