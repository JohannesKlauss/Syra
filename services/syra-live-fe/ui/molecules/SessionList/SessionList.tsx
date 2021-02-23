import React from 'react';
import { Box, Flex, List, ListItem, Text, Link as ChakraLink, AvatarGroup, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { SessionListDataFragment } from '../../../gql/generated';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import publicRuntimeConfig from '../../../const/config';
import AvatarWithOnlineStatus from '../Avatar/AvatarWithOnlineStatus';
import { useTranslation } from "react-i18next";
import { RiExternalLinkLine } from 'react-icons/ri';

interface Props {
  sessions: SessionListDataFragment[];
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const SessionList: React.FC<Props> = ({ sessions, size }) => {
  const { t } = useTranslation();

  return (
    <List spacing={3}>
      {sessions.map((session) => (
        <ListItem key={session.id}>
          <Flex justify={'flex-start'} align={'center'}>
            <Flex align={'center'} w={'30%'}>
              <Box ml={4}>
                <Link passHref href={`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/editor/${session.id}`}>
                  <ChakraLink fontWeight={600} fontSize={size} target={'_blank'}>
                    {session.name}
                  </ChakraLink>
                </Link>
                  <Text fontSize={size} color={'gray.500'}>
                    {t('Created {{date}} ago', {
                      date: formatDistanceToNow(fromUnixTime(session.createdAt / 1000))
                    })}
                  </Text>
              </Box>
            </Flex>
            <AvatarGroup size="sm" spacing={-2} max={6} ml={4} w={32}>
              {session.members.map(({ user }) => (
                <AvatarWithOnlineStatus key={user.id} user={user} />
              ))}
            </AvatarGroup>
            <Text fontSize={size} ml={4} w={64}  color={'gray.500'}>
              {t('Updated {{date}} ago', {
                date: formatDistanceToNow(fromUnixTime(session.updatedAt / 1000))
              })}
            </Text>
            <Link passHref href={`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/editor/${session.id}`}>
              <ChakraLink fontWeight={600} fontSize={size} target={'_blank'}>
                <IconButton icon={<RiExternalLinkLine/>} aria-label={'Open Session in DAW'} title={'Open Session in DAW'} colorScheme={'teal'}/>
              </ChakraLink>
            </Link>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default SessionList;
