import React from 'react';
import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/core';
import { FeUser } from '../../../../types/User';
import { FeedMetaInfo } from '../../../../types/Feed';
import { useTranslation } from 'react-i18next';
import FeedItemAudio from './FeedItemAudio/FeedItemAudio';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import FeedItemActions from './FeedItemActions/FeedItemActions';

interface Props {
  owner: FeUser;
  metaInfo: FeedMetaInfo;
}

function FeedItem({ owner, metaInfo: { timestamp, title, description, id } }: Props) {
  const { t } = useTranslation();

  return (
    <Box marginBottom={4} rounded={'8px'} overflow={'hidden'} bg={'gray.900'} color={'gray.300'} boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}>
      <Box padding={4} background={'linear-gradient(to right, #24243e, #302b63, #24243e)'}>
        <FeedItemAudio owner={owner} id={id} src={'/assets/audio/1080463472.mp3'} title={title} timestamp={timestamp}/>
      </Box>
      <Box padding={4}>
        <Flex align={'center'}>
          <Avatar name={owner.name} src={owner.avatar} size={'sm'}/>
          <Box marginLeft={4}>
            <Text fontSize={'sm'} fontWeight={600}>{owner.name}</Text>
            <Text color={'gray.400'} fontSize={'sm'}>{t('{{time}} ago', {time: formatDistanceToNow(fromUnixTime(timestamp))})}</Text>
          </Box>
        </Flex>
      </Box>
      <Box padding={4} paddingTop={0}>
        <Text fontSize={'sm'}>{description}</Text>
      </Box>
      <Box padding={4} paddingTop={0}>
        <FeedItemActions likes={453} listens={564}/>
        <Divider marginY={4}/>
      </Box>
    </Box>
  );
}

export default FeedItem;
