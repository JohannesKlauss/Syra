import React from 'react';
import { useRecoilValue } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { Box } from '@chakra-ui/react';
import usePlayheadAnimationV2 from '../../../hooks/ui/usePlayheadAnimationV2';

interface PlayheadProps {
  translateX: number;
  isRecording: boolean;
}

const PlayheadIndicator: React.FC<PlayheadProps> = ({ translateX, isRecording }) => (
  <Box
    as={'span'}
    zIndex={12}
    w={'15px'}
    top={'20px'}
    pos={'absolute'}
    h={'1200px'}
    display={'inline-block'}
    cursor={'col-resize'}
    willChange={'transform'}
    pointerEvents={'none'}
    transform={`translateX(${translateX}px)`}
    _before={{
      content: '"\\25BC"',
      bottom: '100%',
      color: isRecording ? 'red.500' : 'gray.50',
      fontSize: '23px',
      left: '-16px',
      position: 'absolute',
      textAlign: 'center',
      width: '32px',
      top: '-23px',
    }}
    _after={{
      backgroundColor: isRecording ? 'red.500' : 'gray.50',
      boxShadow: '0 0 4px 0 black',
      content: '""',
      display: 'inline-block',
      height: '100%',
      marginTop: '-1px',
      width: '1px',
    }}
  />
);

function RulerPlayheadV2() {
  const isRecording = useRecoilValue(transportStore.isRecording);
  const transportTranslate = usePlayheadAnimationV2();

  return <PlayheadIndicator translateX={transportTranslate} isRecording={isRecording} />;
}

export default RulerPlayheadV2;
