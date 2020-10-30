import React from 'react';
import { BlockCommentFragment } from '../../../../gql/generated';
import { Avatar, Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/core';
import Link from 'next/link';
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { useTranslation } from "react-i18next";

interface Props {
  comment: BlockCommentFragment;
}

function Comment({ comment }: Props) {
  const { t } = useTranslation();

  return (
    <Flex align={'top'}>
      <Avatar size={'sm'} src={comment.author.avatar} name={comment.author.name} />
      <Box ml={4}>
        <Flex justify={'space-between'}>
          <Link passHref href={`/profile/${comment.author.handle}`}>
            <Text fontSize={'sm'} cursor={'pointer'} color={'gray.400'}>
              <ChakraLink fontWeight={600} mr={4} color={'gray.100'}>
                {comment.author.name}
              </ChakraLink>
              @{comment.author.handle}
            </Text>
          </Link>
          <Text fontSize={'sm'} color={'gray.400'}>
            {t('{{time}} ago', {time: formatDistanceToNow(fromUnixTime(comment.updatedAt))})}
          </Text>
        </Flex>
        <Text fontSize={'sm'}>{comment.text}</Text>
      </Box>
    </Flex>
  );
}

export default Comment;
