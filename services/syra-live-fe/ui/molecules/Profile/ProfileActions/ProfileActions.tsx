import React, { useState } from 'react';
import { Box, Button, IconButton } from '@chakra-ui/core';
import { BsThreeDots } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { useFollowUserMutation, useUnfollowUserMutation } from '../../../../gql/generated';
import { RiUserFollowLine } from 'react-icons/ri';

interface Props {
  baseIsFollowing: boolean;
  handle: string;
}

function ProfileActions({ baseIsFollowing, handle }: Props) {
  const { t } = useTranslation();
  const [isFollowing, setIsFollowing] = useState(baseIsFollowing);
  const [executeFollowUser, { loading: isFollowLoading }] = useFollowUserMutation();
  const [executeUnfollowUser, { loading: isUnfollowLoading }] = useUnfollowUserMutation();

  const unfollow = async () => {
    const result = await executeUnfollowUser({ variables: { handle: handle } });

    if (result.errors === undefined) {
      setIsFollowing(false);
    }
  };

  const follow = async () => {
    const result = await executeFollowUser({ variables: { handle: handle } });

    if (result.errors === undefined) {
      setIsFollowing(true);
    }
  };

  return (
    <Box marginLeft={8}>
      {isFollowing ?
        <IconButton onClick={unfollow} isLoading={isUnfollowLoading} icon={RiUserFollowLine} marginLeft={8}
                    marginRight={4} size={'sm'} aria-label={t('Unfollow')}/>
        :
        <Button marginLeft={8} onClick={follow} marginRight={4} size={'sm'} variantColor={'teal'}
                isLoading={isFollowLoading}>
          {t('Follow user')}
        </Button>
      }
      <IconButton size={'sm'} variant={'ghost'} icon={BsThreeDots} aria-label={t('more actions')}/>
    </Box>
  );
}

export default ProfileActions;
