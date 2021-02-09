import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from "react";
import useVideoChat from '../../../../hooks/video/useVideoChat';
import { editorStore } from '../../../../recoil/editorStore';
import { useRecoilValue } from 'recoil';

const VIDEO_WIDTH = 500;
const VIDEO_HEIGHT = 230;

interface Props {}

const Video: React.FC<Props> = ({}) => {
  const showVideo = useRecoilValue(editorStore.showVideo);
  const ref = useRef<HTMLDivElement>(null);
  useVideoChat(ref, VIDEO_WIDTH, VIDEO_HEIGHT);

  return (
    <Box
      pos={'fixed'}
      zIndex={10}
      bottom={5}
      right={5}
      w={VIDEO_WIDTH}
      h={VIDEO_HEIGHT}
      display={showVideo ? 'block' : 'none'}
      ref={ref}
    />
  );
};

export default Video;
