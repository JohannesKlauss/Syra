import React from 'react';
import { Avatar, Box, Button, Divider, Flex, List, ListItem, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { RiFileMusicFill, RiHeartFill, RiEdit2Fill } from 'react-icons/ri';
import { TiGroup } from 'react-icons/ti';

interface Props {
  name: string;
  avatar: string;
  followers: number;
  following: number;
}

function ProfileBox({name, avatar, followers, following}: Props) {
  const { t } = useTranslation();

  return (
    <Box overflow={'hidden'} rounded={8} bg={'gray.900'} boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'} marginBottom={16}>
      <Box background={'linear-gradient(to right, #654ea3, #eaafc8)'}>
        <Flex justify={'space-between'} paddingX={8} paddingY={4}>
          <Box>
            <Avatar name={name} src={avatar}/>
          </Box>
          <Box marginLeft={8}>
            <Text fontSize={'lg'} fontWeight={700}>{name}</Text>
            <Text>{followers} {t('Followers')} · {following} {t('Following')}</Text>
          </Box>
        </Flex>
      </Box>
      <Box marginTop={'0.75rem'} paddingX={8}>
        <List spacing={3}>
          <ListItem>
            <Button variant={'link'} leftIcon={RiEdit2Fill}>{t('Edit your profile')}</Button>
            <Divider/>
          </ListItem>
          <ListItem>
            <Button variant={'link'} leftIcon={RiFileMusicFill}>{t('Sessions')}</Button>
            <Divider/>
          </ListItem>
          <ListItem>
            <Button variant={'link'} leftIcon={TiGroup}>{t('Bands')}</Button>
            <Divider/>
          </ListItem>
          <ListItem>
            <Button variant={'link'} leftIcon={RiHeartFill}>{t('Likes')}</Button>
            <Divider/>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default ProfileBox;
