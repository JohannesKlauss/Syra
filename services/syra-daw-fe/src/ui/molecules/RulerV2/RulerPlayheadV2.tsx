import React, { useContext } from "react";
import { useRecoilValue } from 'recoil';
import { transportStore } from '../../../recoil/transportStore';
import { Box } from '@chakra-ui/react';
import usePlayheadAnimationV3 from "../../../hooks/ui/usePlayheadAnimationV3";
import {motion, MotionValue} from "framer-motion";
import { ViewContext } from "../../../providers/ViewContext";

interface PlayheadProps {
  x: MotionValue<number>;
  height: string;
  isRecording: boolean;
}

const PlayheadIndicator: React.FC<PlayheadProps> = ({ x, height, isRecording }) => (
  <motion.div style={{x, position: 'absolute', zIndex: 10}}>
    <Box
      as={'span'}
      zIndex={120}
      w={'15px'}
      top={'20px'}
      pos={'absolute'}
      h={height}
      display={'inline-block'}
      cursor={'col-resize'}
      pointerEvents={'none'}
      _before={{
        content: '"\\25BC"',
        bottom: '100%',
        color: isRecording ? 'red.500' : 'gray.50',
        fontSize: '23px',
        left: '-15px',
        position: 'absolute',
        textAlign: 'center',
        width: '31px',
        top: '-23px',
        textShadow: '0px 0px 4px rgba(0, 0, 0, 0.7)',
      }}
      _after={{
        backgroundColor: isRecording ? 'red.500' : 'gray.50',
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.7)',
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
  const { viewRef } = useContext(ViewContext);

  return <PlayheadIndicator x={x} height={`${viewRef.current?.clientHeight ? viewRef.current?.clientHeight - 40 : 0}px`} isRecording={isRecording} />;
}

export default RulerPlayheadV2;
