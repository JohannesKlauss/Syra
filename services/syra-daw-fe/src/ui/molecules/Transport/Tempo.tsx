import React from 'react';
import useTempoMapScheduler from '../../../hooks/tone/useTempoMapScheduler';
import { Box, Button } from '@chakra-ui/react';
import { motion, PanInfo, useMotionValue } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../../recoil/projectStore";

function Tempo() {
  const setTempoMap = useSetRecoilState(projectStore.tempoMap);
  const currentTempo = useTempoMapScheduler();
  const y = useMotionValue(0);
  const lastOffset = useMotionValue(0);

  const onYChanged = (e: MouseEvent, {offset}: PanInfo) => {
    const roundedOffset = Math.round(-(offset.y / 5));

    setTempoMap({0: Math.max(1, currentTempo + (roundedOffset - lastOffset.get()))});

    lastOffset.set(roundedOffset);
    y.set(0);
  };

  return (
    <Box pos={'relative'}>
      <motion.div drag={'y'} onDrag={onYChanged} onDragEnd={() => lastOffset.set(0)} dragMomentum={false} dragElastic={0} style={{y}}>
        <Button variant={'ghost'} size={'sm'} cursor={'ns-resize'}>
          {currentTempo} BPM
        </Button>
      </motion.div>
    </Box>
  );
}

export default Tempo;
