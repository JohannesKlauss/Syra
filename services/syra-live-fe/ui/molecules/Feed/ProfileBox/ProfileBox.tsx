import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Link as ChakraLink,
  List,
  ListItem,
  Skeleton,
  Text,
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { RiFileMusicFill, RiHeartFill, RiEdit2Fill, RiMessage3Line } from 'react-icons/ri';
import { TiGroup } from 'react-icons/ti';
import { useMeQuery } from '../../../../gql/generated';
import Link from 'next/link';

interface Props {
}

function ProfileBox({}: Props) {
  const { t } = useTranslation();
  const { data, loading, error } = useMeQuery();

  if (error) {
    return null;
  }

  if (loading) {
    return <Skeleton h={200}/>;
  }

  return (
    <Box overflow={'hidden'} rounded={8} bg={'gray.900'} boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}
         marginBottom={16}>
      <Box background={'linear-gradient(to right, #654ea3, #eaafc8)'}>
        <Flex justify={'flex-start'} paddingX={8} paddingY={4}>
          <Box>
            <Avatar name={data.me.name} src={data.me.avatar}/>
          </Box>
          <Box marginLeft={8}>
            <Link passHref href={`/profile/${data.me.handle}`}>
              <ChakraLink fontWeight={700} fontSize={'lg'}>{data.me.name}</ChakraLink>
            </Link>
            <Text>
              <Link passHref href={`/followers`}>
                <ChakraLink>{data.me.followedByCount} {t('Followers')}</ChakraLink>
              </Link>
              {' · '}
              <Link passHref href={`/following`}>
                <ChakraLink>{data.me.followingCount} {t('Following')}</ChakraLink>
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box marginTop={'0.75rem'} paddingX={8}>
        <List spacing={3}>
          <ListItem>
            <Link href={`/account/edit`}>
              <Button variant={'link'}  leftIcon={<RiEdit2Fill/>}>{t('Edit your profile')}</Button>
            </Link>
            <Divider/>
          </ListItem>
          <ListItem>
            <Link href={`/chat`}>
              <Button variant={'link'}  leftIcon={<RiMessage3Line/>}>{t('Messages')}</Button>
            </Link>
            <Divider/>
          </ListItem>
          <ListItem>
            <Button variant={'link'} leftIcon={<RiFileMusicFill/>}>{t('Sessions')}</Button>
            <Divider/>
          </ListItem>
          <ListItem>
            <Button variant={'link'} leftIcon={<TiGroup/>}>{t('Bands')}</Button>
            <Divider/>
          </ListItem>
          <ListItem>
            <Link href={`/likes`}>
              <Button variant={'link'} leftIcon={<RiHeartFill/>}>{t('Likes')}</Button>
            </Link>
            <Divider/>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default ProfileBox;
