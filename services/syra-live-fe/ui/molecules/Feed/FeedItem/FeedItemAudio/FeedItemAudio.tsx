import React, { useMemo, useState } from 'react';
import { FeUser } from '../../../../../types/User';
import { Badge, Box, Flex, IconButton, PseudoBox, Skeleton, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause } from 'react-icons/fa';
import useWavesurfer from './useWavesurfer';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import useInterval from '../../../../../hooks/useInterval';
import { formatAudioDuration } from '../../../../../helpers/time/formatAudioDuration';

interface Props {
  owner: FeUser;
  title: string;
  src: string;
  id: string;
  timestamp: number;
}

function FeedItemAudio({ owner, title, src, id, timestamp }: Props) {
  const { t } = useTranslation();
  const { wave, isPlaying, isLoaded } = useWavesurfer(id, src);
  const [elapsedTime, setElapsedTime] = useState(0);
  const duration = useMemo(() => isLoaded && wave.current ? wave.current.getDuration() : 0, [isLoaded, wave.current]);

  const onClickPlayPause = async () => {
    if (isPlaying) {
      await wave.current.pause();
    } else {
      await wave.current.play();
    }
  };

  useInterval(() => {
    setElapsedTime(wave.current.getCurrentTime());
  }, isPlaying ? 1010 : null);

  return (
    <Box>
      <Box>
        <Flex justify={'space-between'}>
          <Flex align={'center'}>
            <IconButton onClick={onClickPlayPause} size={'sm'} icon={isPlaying ? FaPause : FaPlay} aria-label={t('Play / Pause')}/>
            <Box marginX={4}>
              <Flex align={'center'}>
                <Text fontWeight={600} fontSize={'sm'}>
                  {title}
                  <Badge marginLeft={4}>Post Metal</Badge>
                </Text>
              </Flex>
              <Text fontWeight={400} fontSize={'sm'}>{owner.name}</Text>
            </Box>
          </Flex>
          <Box>
            <Text fontWeight={400} fontSize={'sm'}>{t('{{time}} ago', {time: formatDistanceToNow(fromUnixTime(timestamp))})}</Text>
          </Box>
        </Flex>
      </Box>
      <Skeleton isLoaded={isLoaded}>
        <PseudoBox id={id} w={'100%'} margin={4}/>
        <Badge marginTop={-4} float={'right'}>{formatAudioDuration(elapsedTime)} / {formatAudioDuration(duration)}</Badge>
      </Skeleton>
    </Box>
  );
}

export default FeedItemAudio;
