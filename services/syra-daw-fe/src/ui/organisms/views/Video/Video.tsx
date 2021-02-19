import { Box } from '@chakra-ui/react';
import React, { useRef } from "react";
import useVideoChat from '../../../../hooks/video/useVideoChat';
import { editorStore } from '../../../../recoil/editorStore';
import { useRecoilValue } from 'recoil';

const VIDEO_WIDTH = 500;
const VIDEO_HEIGHT = 230;

const Video: React.FC = () => {
  const showVideo = useRecoilValue(editorStore.showVideo);
  const ref = useRef<HTMLDivElement>(null);
  useVideoChat(ref, VIDEO_WIDTH, VIDEO_HEIGHT);

  return (
    <Box
      pos={'fixed'}
      zIndex={10}
      bottom={'91px'}
      right={'10px'}
      w={VIDEO_WIDTH}
      h={VIDEO_HEIGHT}
      display={showVideo ? 'block' : 'none'}
      ref={ref}
    />
  );
};

export default Video;
