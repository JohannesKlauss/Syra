import React, { useMemo, useState } from 'react';
import { Badge, Box, Flex, IconButton, Skeleton, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause } from 'react-icons/fa';
import useWavesurfer from './useWavesurfer';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import useInterval from '../../../../../hooks/useInterval';
import { formatAudioDuration } from '../../../../../helpers/time/formatAudioDuration';
import { PreviewMixdownFragment } from "../../../../../gql/generated";

interface Props {
  authorName: string;
  projectName: string;
  mixdown: PreviewMixdownFragment;
}

function FeedItemAudio({ authorName, projectName, mixdown }: Props) {
  const { t } = useTranslation();
  const { wave, isPlaying, isLoaded } = useWavesurfer(mixdown.id, mixdown.audio.location);
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
            <IconButton onClick={onClickPlayPause} size={'sm'} icon={isPlaying ? <FaPause/> : <FaPlay/>} aria-label={t('Play / Pause')}/>
            <Box marginX={4}>
              <Flex align={'center'}>
                <Text fontWeight={600} fontSize={'sm'}>
                  {projectName}
                  <Badge marginLeft={4}>Post Metal</Badge>
                </Text>
              </Flex>
              <Text fontWeight={400} fontSize={'sm'}>{authorName}</Text>
            </Box>
          </Flex>
          <Box>
            <Text fontWeight={400} fontSize={'sm'}>{t('{{time}} ago', {time: formatDistanceToNow(fromUnixTime(mixdown.createdAt / 1000))})}</Text>
          </Box>
        </Flex>
      </Box>
      <Skeleton isLoaded={isLoaded}>
        <Box id={mixdown.id} w={'100%'} margin={4}/>
        <Badge marginTop={-4} float={'right'}>{formatAudioDuration(elapsedTime)} / {formatAudioDuration(duration)}</Badge>
      </Skeleton>
    </Box>
  );
}

export default FeedItemAudio;
