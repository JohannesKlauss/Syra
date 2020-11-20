import React from 'react';
import { Box, IconButton } from '@chakra-ui/core';
import { BsThreeDots } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import FollowAction from '../../../atoms/FollowAction/FollowAction';
import MessageAction from "../../../atoms/MessageAction/MessageAction";

interface Props {
  baseIsFollowing: boolean;
  handle: string;
  userId: string;
}

function ProfileActions({ baseIsFollowing, handle, userId }: Props) {
  const { t } = useTranslation();

  return (
    <Box marginLeft={8}>
      <FollowAction
        handle={handle}
        isMeFollowing={baseIsFollowing}
        followingContent={<MessageAction userId={userId}/>}
      />
      <IconButton size={'sm'} variant={'ghost'} icon={<BsThreeDots/>} aria-label={t('more actions')} />
    </Box>
  );
}

export default ProfileActions;
