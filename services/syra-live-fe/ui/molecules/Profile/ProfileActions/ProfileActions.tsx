import React from 'react';
import { Box, Button, IconButton } from '@chakra-ui/core';
import { BsThreeDots } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { RiMessage2Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import FollowAction from '../../../atoms/FollowAction/FollowAction';

interface Props {
  baseIsFollowing: boolean;
  handle: string;
}

function ProfileActions({ baseIsFollowing, handle }: Props) {
  const { t } = useTranslation();
  const { push } = useRouter();

  const initChat = async () => {
    await push('/chat');
  };

  return (
    <Box marginLeft={8}>
      <FollowAction
        handle={handle}
        isMeFollowing={baseIsFollowing}
        followingContent={
          <Button onClick={initChat} marginRight={4} size={'sm'} leftIcon={RiMessage2Line}>
            {t('Write message')}
          </Button>
        }
      />
      <IconButton size={'sm'} variant={'ghost'} icon={BsThreeDots} aria-label={t('more actions')} />
    </Box>
  );
}

export default ProfileActions;
