import React from 'react';
import { SessionListDataFragment } from '../../../gql/generated';
import { useTranslation } from 'react-i18next';
import { AvatarGroup, Box, Flex, IconButton, List, ListItem, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import publicRuntimeConfig from '../../../const/config';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import AvatarWithOnlineStatus from '../Avatar/AvatarWithOnlineStatus';
import { RiExternalLinkLine } from 'react-icons/ri';

interface Props {
  sessions: SessionListDataFragment[];
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const SessionSearchResultList: React.FC<Props> = ({ sessions, size }) => {
  const { t } = useTranslation();

  return (
    <List spacing={3}>
      {sessions.map((session) => (
        <ListItem key={session.id}>
          <Flex justify={'space-between'} align={'center'}>
            <Box isTruncated maxW={'50%'} w={'50%'}>
              <Link passHref href={`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/editor/${session.id}`}>
                <ChakraLink fontWeight={600} fontSize={size} target={'_blank'}>
                  {session.name}
                </ChakraLink>
              </Link>
              <Text fontSize={'xs'} color={'gray.500'}>
                {t('Updated {{date}} ago', {
                  date: formatDistanceToNow(fromUnixTime(session.updatedAt / 1000)),
                })}
              </Text>
            </Box>
            <AvatarGroup size="sm" spacing={-2} max={6} w={32} ml={4}>
              {session.members.map(({ user }) => (
                <AvatarWithOnlineStatus key={user.id} user={user} />
              ))}
            </AvatarGroup>
            <Link passHref href={`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/editor/${session.id}`}>
              <ChakraLink fontWeight={600} fontSize={size} target={'_blank'}>
                <IconButton
                  icon={<RiExternalLinkLine />}
                  aria-label={'Open Session in DAW'}
                  title={`Open ${session.name} in DAW`}
                  colorScheme={'teal'}
                  size={'sm'}
                />
              </ChakraLink>
            </Link>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default SessionSearchResultList;
