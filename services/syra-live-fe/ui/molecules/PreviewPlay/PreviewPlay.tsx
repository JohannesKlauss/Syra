import React, { useRef, useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaPause, FaPlay } from 'react-icons/fa';

interface Props {
  audioUri: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

function PreviewPlay({ audioUri, size = 'md' }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();
  const { t } = useTranslation();

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      audioRef.current = new Audio(audioUri);
      audioRef.current.autoplay = true;
      audioRef.current.load();

      setIsPlaying(true);
    }
  };

  return (
    <IconButton size={size} icon={isPlaying ? <FaPause/> : <FaPlay/>} onClick={togglePlay} aria-label={t('Preview Mixdown')}/>
  );
}

export default PreviewPlay;
