import React from 'react';
import {
  Avatar,
  AvatarBadge,
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList, Skeleton,
  Text,
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { RiFileMusicFill, RiHeartFill, RiSettings4Fill, RiLogoutCircleLine, RiChat4Fill } from 'react-icons/ri';
import { FaRecordVinyl } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { IoMdHelpBuoy } from 'react-icons/io';
import { MdGroup, MdGroupAdd } from 'react-icons/md';
import useLogout from './useLogout';
import { useMeQuery } from '../../../../gql/generated';
import { useRouter } from 'next/router';

interface Props {
}

function AvatarMenu({}: Props) {
  const { t } = useTranslation();
  const logout = useLogout();
  const { push } = useRouter();
  const { data, loading, error } = useMeQuery();

  const hasNotifications = false;

  if (error) {
    return null;
  }

  if (loading) return <Skeleton w={'70'} h={'70'} rounded={'full'}/>

  return (
    <Menu>
      <MenuButton>
        <Avatar name={data.me.name} src={data.me.avatar} cursor={'pointer'} size={'sm'}>
          {hasNotifications && <AvatarBadge bg="red.400" size="1em"/>}
        </Avatar>
      </MenuButton>
      <MenuList color={'gray.400'}>
        <MenuItem onClick={() => push(`/profile/${data.me.handle}`)}>
          <Avatar name={data.me.name} src={data.me.avatar} size={'sm'}/>
          <Box marginLeft={4}>
            <Text fontSize={'xs'} color={'gray.200'}>{data.me.name}</Text>
            <Text fontSize={'xs'} color={'purple.400'}>{t('View Profile')}</Text>
          </Box>
        </MenuItem>
        <MenuDivider/>
        <MenuItem>
          <Box as={RiFileMusicFill}/>
          <Box marginLeft={4}>
            <Text>{t('Sessions')}</Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box as={FaRecordVinyl}/>
          <Box marginLeft={4}>
            <Text>{t('Albums')}</Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box as={TiGroup}/>
          <Box marginLeft={4}>
            <Text>{t('Bands')}</Text>
          </Box>
        </MenuItem>
        <MenuDivider/>
        <MenuItem>
          <Box as={MdGroup}/>
          <Box marginLeft={4}>
            <Text>{t('Followers')}</Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box as={MdGroupAdd}/>
          <Box marginLeft={4}>
            <Text>{t('Following')}</Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box as={RiHeartFill}/>
          <Box marginLeft={4}>
            <Text>{t('Likes')}</Text>
          </Box>
        </MenuItem>
        <MenuDivider/>
        <MenuItem onClick={() => push('/account/edit')}>
          <Box as={RiSettings4Fill}/>
          <Box marginLeft={4}>
            <Text>{t('Settings')}</Text>
          </Box>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Box as={RiLogoutCircleLine}/>
          <Box marginLeft={4}>
            <Text>{t('Log out')}</Text>
          </Box>
        </MenuItem>
        <MenuDivider/>
        <MenuItem>
          <Box as={IoMdHelpBuoy}/>
          <Box marginLeft={4}>
            <Text>{t('Help')}</Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box as={RiChat4Fill}/>
          <Box marginLeft={4}>
            <Text>{t('Report a problem')}</Text>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;
