import React from 'react';
import { useRecoilValue } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { Box } from '@chakra-ui/react';
import usePlayheadAnimationV3 from "../../../hooks/ui/usePlayheadAnimationV3";
import {motion, MotionValue} from "framer-motion";

interface PlayheadProps {
  x: MotionValue<number>;
  isRecording: boolean;
}

const PlayheadIndicator: React.FC<PlayheadProps> = ({ x, isRecording }) => (
  <motion.div style={{x}}>
    <Box
      as={'span'}
      zIndex={12}
      w={'15px'}
      top={'20px'}
      pos={'absolute'}
      h={'36000px'}
      display={'inline-block'}
      cursor={'col-resize'}
      pointerEvents={'none'}
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
  </motion.div>
);

function RulerPlayheadV2() {
  const isRecording = useRecoilValue(transportStore.isRecording);
  const x = usePlayheadAnimationV3();

  return <PlayheadIndicator x={x} isRecording={isRecording} />;
}

export default RulerPlayheadV2;
