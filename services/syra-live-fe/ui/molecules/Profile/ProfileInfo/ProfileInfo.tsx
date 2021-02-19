import React from 'react';
import { Avatar, Box, Button, Flex, Link as ChakraLink, Stack, Tag, Text } from '@chakra-ui/react';
import { ProfileFragment } from "../../../../gql/generated";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import ProfileActions from '../ProfileActions/ProfileActions';
import { RiEdit2Fill } from 'react-icons/ri';

interface Props {
  user: ProfileFragment;
}

function ProfileInfo({ user }: Props) {
  const { t } = useTranslation();

  return (
    <Box>
      <Flex justify={'space-between'}>
        <Avatar name={user.name} src={user.avatar} size={'2xl'} marginRight={24}/>
        <Box flex={1}>
          <Flex align={'center'} justify={'space-between'}>
            <Text fontSize={'lg'} fontWeight={600}>@{user.handle}</Text>
            {user.isMyself
              ? (
                <Button leftIcon={<RiEdit2Fill/>}>
                  <Link href={'/account/edit'}>
                    {t('Edit your profile')}
                  </Link>
                </Button>
              )
              : <ProfileActions userId={user.id} baseIsFollowing={user.isMeFollowing} handle={user.handle}/>
            }
          </Flex>
          <Flex marginY={4}>
            <Text><strong>{user.sessionCount}</strong> {t('sessions')}</Text>
            <Link href={`/followers`}>
              <Text marginX={8} cursor={'pointer'}><strong>{user.followedByCount}</strong> {t('Followers')}</Text>
            </Link>
            <Link href={`/following`}>
              <Text cursor={'pointer'}><strong>{user.followingCount}</strong> {t('Following')}</Text>
            </Link>
          </Flex>
          <Box>
            <Text fontWeight={600}>{user.name}</Text>
            <Text marginY={1}>{user.bio}</Text>
            <ChakraLink href={user.website} isExternal color={'teal.200'} fontWeight={600}>{user.website}</ChakraLink>
          </Box>
          {user.followedBy.length > 0 && (
            <Flex align={'center'} justify={'space-between'} marginY={4}>
              <Text color={'gray.400'} fontSize={'sm'}>
                {t('Followed by')}
                {' '}
                {user.followedBy.map((follower, i) => (
                  <React.Fragment key={follower.handle}>
                    <Link passHref href={`profile/${follower.handle}`}>
                      <ChakraLink display={'inline'} fontWeight={600} color={'gray.300'}>{follower.name}</ChakraLink>
                    </Link>
                    {i < user.followedBy.length - 1 ? ', ' : ' '}
                  </React.Fragment>
                ))}
                {user.followedByCount - user.followedBy.length > 0 && t('and {{followers}} others', { followers: user.followedByCount - user.followedBy.length })}
              </Text>
              <Stack spacing={2} isInline>
                {user.interests.map(({ value }) => (
                  <Tag size={'sm'} key={value} colorScheme="gray">{value}</Tag>
                ))}
              </Stack>
            </Flex>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default ProfileInfo;
