import React from 'react';
import { FeUser } from '../../../../../types/User';
import { Box, Button, Flex, IconButton, PseudoBox, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause } from 'react-icons/fa';
import { CgGitFork } from 'react-icons/cg';
import { RiHeartFill, RiShareForwardFill } from 'react-icons/ri';
import useWavesurfer from './useWavesurfer';
import { format, fromUnixTime } from 'date-fns';

interface Props {
  owner: FeUser;
  title: string;
  src: string;
  id: string;
  views: number;
  timestamp: number;
}

function FeedItemAudio({ owner, title, src, id, views, timestamp }: Props) {
  const { t } = useTranslation();
  const { wave, isPlaying } = useWavesurfer(id, src);

  const onClickPlayPause = async () => {
    if (isPlaying) {
      await wave.current.pause();
    } else {
      await wave.current.play();
    }
  }

  return (
    <Box>
      <Box>
        <Flex justify={'space-between'}>
          <Box>
            <Text fontWeight={600} >{title}</Text>
            <Text fontWeight={400} fontSize={'sm'}>{owner.name}</Text>
          </Box>
          <Box>
            <Text fontWeight={400} fontSize={'sm'}>{format(fromUnixTime(timestamp), 'MMMM dd')}</Text>
          </Box>
        </Flex>
      </Box>
      <Flex align={'center'}>
        <IconButton onClick={onClickPlayPause} icon={isPlaying ? FaPause : FaPlay} aria-label={t('Play / Pause')}/>
        <PseudoBox id={id} marginLeft={4} w={'100%'}/>
      </Flex>
      <Box>
        <Flex justify={'space-between'} align={'center'}>
          <Box>
            <Flex align={'center'}>
              <Box as={FaPlay} size={'11px'} marginRight={2}/>
              <Text fontWeight={400} fontSize={'sm'}>{views}</Text>
            </Flex>
          </Box>
          <Box>
            <Flex align={'center'}>
              <Button marginX={2} leftIcon={CgGitFork} variantColor={'teal'} size={'sm'}>{t('Make it your own')}</Button>
              <Button marginX={2} leftIcon={RiShareForwardFill} variantColor={'gray'} size={'sm'}>{t('Share')}</Button>
              <Button marginLeft={2} rightIcon={RiHeartFill} variantColor={'gray'} size={'sm'}>9</Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default FeedItemAudio;
