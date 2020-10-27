import React from 'react';
import { Avatar, Box, Flex, Link as ChakraLink, Stack, Tag, Text } from '@chakra-ui/core';
import { UserProfileByHandleQuery } from '../../../../gql/generated';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import ProfileActions from '../ProfileActions/ProfileActions';

interface Props {
  user: UserProfileByHandleQuery;
}

function ProfileInfo({ user: { user } }: Props) {
  const { t } = useTranslation();

  return (
    <Box>
      <Flex justify={'space-between'}>
        <Avatar name={user.name} src={user.avatar} size={'2xl'} marginRight={24}/>
        <Box flex={1}>
          <Flex align={'center'} justify={'space-between'}>
            <Text fontSize={'lg'} fontWeight={600}>@{user.handle}</Text>
            <ProfileActions baseIsFollowing={user.isFollowing} handle={user.handle}/>
          </Flex>
          <Flex justify={'space-between'} marginY={4}>
            <Text><strong>5</strong> {t('sessions')}</Text>
            <Text><strong>{user.followedByCount}</strong> {t('Followers')}</Text>
            <Text><strong>{user.followingCount}</strong> {t('Following')}</Text>
          </Flex>
          <Box>
            <Text fontWeight={600}>{user.name}</Text>
            <Text marginY={1}>{user.bio}</Text>
            <ChakraLink href={user.website} isExternal color={'teal.200'} fontWeight={600}>{user.website}</ChakraLink>
          </Box>
          <Flex align={'center'} justify={'space-between'} marginY={4}>
            <Text color={'gray.400'} fontSize={'sm'}>
              {t('Followed by')}
              {' '}
              {user.followedBy.map((follower, i) => (
                <>
                  <Link passHref href={`profile/${follower.handle}`}>
                    <ChakraLink display={'inline'} fontWeight={600} color={'gray.300'}>{follower.name}</ChakraLink>
                  </Link>
                  {i < user.followedBy.length - 1 ? ', ' : ' '}
                </>
              ))}
              {t('and {{followers}} others', { followers: user.followedByCount - user.followedBy.length })}
            </Text>
            <Stack spacing={2} isInline>
              {user.interests.map(({ value }) => (
                <Tag size={'sm'} key={value} variantColor="gray">{value}</Tag>
              ))}
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProfileInfo;
