import React, { useState } from 'react';
import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/core';
import { FaPlay } from 'react-icons/fa';
import { CgGitFork } from 'react-icons/cg';
import { BsThreeDots } from 'react-icons/bs';
import { RiHeartFill, RiShareForwardFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useLikeFeedItemMutation, useUnlikeFeedItemMutation } from '../../../../../gql/generated';

interface Props {
  listens?: number;
  likes: number;
  isMeLiking: boolean;
  feedItemId: string;
}

function FeedItemActions({ listens, likes, isMeLiking, feedItemId }: Props) {
  const { t } = useTranslation();
  const [isOptimisticMeLiking, setIsOptimisticMeLiking] = useState(isMeLiking);
  const [optimisticLikes, setOptimisticLikes] = useState(likes);
  const [executeLike, { loading: isLikeLoading }] = useLikeFeedItemMutation();
  const [executeUnlike, { loading: isUnlikeLoading }] = useUnlikeFeedItemMutation();

  const onToggleLike = async () => {
    if (isOptimisticMeLiking) {
      setIsOptimisticMeLiking(false);
      setOptimisticLikes((count) => count - 1);

      await executeUnlike({
        variables: {
          feedItemId,
          me: null,
        },
      });
    } else {
      setIsOptimisticMeLiking(true);
      setOptimisticLikes((count) => count + 1);

      await executeLike({ variables: { feedItemId } });
    }
  };

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
        <Box>
          {listens && (
            <Flex align={'center'}>
              <Box as={FaPlay} size={'11px'} marginRight={2} />
              <Text fontWeight={400} fontSize={'sm'}>
                {listens}
              </Text>
            </Flex>
          )}
        </Box>
        <Box>
          <Flex align={'center'}>
            {listens && (
              <Button marginX={2} leftIcon={<CgGitFork/>} colorScheme={'teal'} size={'sm'}>
                {t('Make it your own')}
              </Button>
            )}
            <Button marginX={2} leftIcon={<RiShareForwardFill/>} colorScheme={'gray'} size={'sm'}>
              {t('Share')}
            </Button>
            <Button
              marginX={2}
              rightIcon={<RiHeartFill/>}
              colorScheme={isOptimisticMeLiking ? 'teal' : 'gray'}
              onClick={onToggleLike}
              isLoading={isLikeLoading || isUnlikeLoading}
              size={'sm'}
            >
              {optimisticLikes}
            </Button>
            <IconButton marginLeft={2} aria-label={'Expand menu'} icon={<BsThreeDots/>} size={'sm'} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default FeedItemActions;
