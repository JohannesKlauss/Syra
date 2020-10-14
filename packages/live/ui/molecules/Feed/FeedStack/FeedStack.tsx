import React from 'react';
import { Box, Stack } from '@chakra-ui/core';
import FeedItem from '../FeedItem/FeedItem';
import { TFeedItem } from '../../../../types/Feed';

interface Props {
  items: TFeedItem[]
}

function FeedStack({items}: Props) {
  return (
    <Stack spacing={8} w={'100%'}>
      {items.map((item, i) => <FeedItem key={i} {...item}/>)}
    </Stack>
  );
}

export default FeedStack;
