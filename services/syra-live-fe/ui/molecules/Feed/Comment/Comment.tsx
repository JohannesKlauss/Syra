import React, { useState } from 'react';
import { BlockCommentFragment, useLikeCommentMutation, useUnlikeCommentMutation } from '../../../../gql/generated';
import { Avatar, Box, Flex, Text, Link as ChakraLink, Button } from '@chakra-ui/core';
import Link from 'next/link';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { RiHeartFill } from 'react-icons/ri';

interface Props {
  comment: BlockCommentFragment;
}

function Comment({ comment }: Props) {
  const { t } = useTranslation();
  const [isMeLiking, setIsMeLiking] = useState(comment.isMeLiking);
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [executeLike] = useLikeCommentMutation();
  const [executeUnlike] = useUnlikeCommentMutation();

  const onToggleLike = async () => {
    if (isMeLiking) {
      setIsMeLiking(false);
      setLikeCount(count => count - 1);

      await executeUnlike({
        variables: {
          commentId: comment.id,
          me: null,
        }
      });
    } else {
      setIsMeLiking(true);
      setLikeCount(count => count + 1);

      await executeLike({
        variables: {
          commentId: comment.id,
        }
      });
    }
  };

  return (
    <Flex align={'top'} mb={4}>
      <Avatar size={'sm'} src={comment.author.avatar} name={comment.author.name} />
      <Box ml={4} w={'100%'}>
        <Flex justify={'space-between'}>
          <Link passHref href={`/profile/${comment.author.handle}`}>
            <Text fontSize={'sm'} cursor={'pointer'} color={'gray.400'}>
              <ChakraLink fontWeight={600} mr={4} color={'gray.100'}>
                {comment.author.name}
              </ChakraLink>
              @{comment.author.handle}
            </Text>
          </Link>
          <Text fontSize={'xs'} color={'gray.400'}>
            {t('{{time}} ago', { time: formatDistanceToNow(fromUnixTime(comment.updatedAt / 1000)) })}
          </Text>
        </Flex>
        <Text fontSize={'sm'}>{comment.text}</Text>
        <Flex mt={2} justify={'space-between'} color={'gray.400'}>
          <Flex>
            <Button size={'xs'} variant={'link'} fontWeight={600} variantColor={null}>
              {t('Reply')}
            </Button>
            <Button ml={4} size={'xs'} variant={'link'} fontWeight={600} variantColor={isMeLiking && 'teal'} onClick={onToggleLike}>
              {t(isMeLiking ? 'Liked' : 'Like')}
            </Button>
          </Flex>
          <Flex align={'center'} color={isMeLiking && 'teal.300'}>
            <Box as={RiHeartFill} size={'14px'} />
            <Text fontSize={'xs'} ml={2}>
              {likeCount}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Comment;
