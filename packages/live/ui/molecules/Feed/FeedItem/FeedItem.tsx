import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/core';
import { FeUser } from '../../../../types/User';
import { FeedMetaInfo } from '../../../../types/Feed';
import { useTranslation } from 'react-i18next';
import FeedItemAudio from './FeedItemAudio/FeedItemAudio';
import { format, fromUnixTime } from 'date-fns';

interface Props {
  owner: FeUser;
  metaInfo: FeedMetaInfo;
}

function FeedItem({ owner, metaInfo: { timestamp, title, description, id } }: Props) {
  const { t } = useTranslation();

  return (
    <Box marginBottom={4} rounded={'8px'} overflow={'hidden'} bg={'gray.900'} color={'gray.300'}>
      <Box background={'linear-gradient(to right, #654ea3, #eaafc8)'} height={'2px'}/>
      <Box padding={4}>
        <Flex align={'center'}>
          <Avatar name={owner.name} src={owner.avatar}/>
          <Box marginLeft={4}>
            <Text>
              <strong>{owner.name}</strong>{' '}
              {t('published')}{' '}
              <strong>{title}</strong>
            </Text>
            <Text color={'gray.400'}>{format(fromUnixTime(timestamp), 'MMMM dd')}</Text>
          </Box>
        </Flex>
      </Box>
      <Box padding={4} paddingTop={0}>
        <Text>{description}</Text>
      </Box>
      <Box marginY={4} marginX={4} padding={4} background={'linear-gradient(to right, #24243e, #302b63, #24243e)'}>
        <FeedItemAudio owner={owner} id={id} src={'/assets/audio/1080463472.mp3'} title={title} views={45} timestamp={timestamp}/>
      </Box>
    </Box>
  );
}

export default FeedItem;
