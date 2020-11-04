import React, { useState } from "react";
import { Button, IconButton } from "@chakra-ui/core";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../../gql/generated";
import { useTranslation } from "react-i18next";
import { RiUserFollowLine } from 'react-icons/ri';

interface Props {
  handle: string,
  isMeFollowing: boolean;
  followingContent?: JSX.Element;
}

const FollowAction: React.FC<Props> = ({handle, isMeFollowing, followingContent}) => {
  const { t } = useTranslation();
  const [isOptimisticFollowing, setIsOptimisticFollowing] = useState(isMeFollowing);
  const [executeUnfollowUser, { loading: isUnfollowLoading }] = useUnfollowUserMutation();
  const [executeFollowUser, {loading: isFollowLoading}] = useFollowUserMutation();

  const unfollow = async () => {
    const result = await executeUnfollowUser({ variables: { handle: handle } });

    if (result.errors === undefined) {
      setIsOptimisticFollowing(false);
    }
  };

  const follow = async () => {
    const result = await executeFollowUser({ variables: { handle: handle } });

    if (result.errors === undefined) {
      setIsOptimisticFollowing(true);
    }
  };
  
  return (
    <>
      {isOptimisticFollowing ? (
        <>
          <IconButton
            onClick={unfollow}
            isLoading={isUnfollowLoading}
            icon={RiUserFollowLine}
            marginLeft={8}
            marginRight={4}
            size={'sm'}
            aria-label={t('Unfollow')}
          />
          {followingContent}
        </>
      ) : (
        <Button
          marginLeft={8}
          onClick={follow}
          marginRight={4}
          size={'sm'}
          variantColor={'teal'}
          isLoading={isFollowLoading}
        >
          {t('Follow user')}
        </Button>
      )}
    </>
  );
};

export default FollowAction;
