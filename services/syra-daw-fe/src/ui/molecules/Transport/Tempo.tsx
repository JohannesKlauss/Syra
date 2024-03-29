import React, { useEffect, useState } from "react";
import { Box, Button } from '@chakra-ui/react';
import { motion, PanInfo, useMotionValue } from "framer-motion";
import useTempoWatcher from "../../../hooks/tone/useTempoWatcher";

function Tempo() {
  const {currentTempo, setTempoMap} = useTempoWatcher();
  const x = useMotionValue(0);
  const lastOffset = useMotionValue(0);
  const [tempoCopy, setTempoCopy] = useState(currentTempo);

  useEffect(() => {
    setTempoCopy(currentTempo);
  }, [currentTempo, setTempoCopy]);

  const onXChanged = (e: MouseEvent, {offset}: PanInfo) => {
    const roundedOffset = Math.round(offset.x / 5);

    setTempoCopy(Math.max(1, tempoCopy + (roundedOffset - lastOffset.get())));

    lastOffset.set(roundedOffset);
    x.set(0);
  };

  const onDragEnd = () => {
    lastOffset.set(0);
    x.set(0);

    setTempoMap({0: tempoCopy});
  };

  return (
    <Box pos={'relative'}>
      <motion.div drag={'x'} onDrag={onXChanged} onDragEnd={onDragEnd} dragMomentum={false} dragElastic={0} style={{x}}>
        <Button variant={'ghost'} size={'sm'} cursor={'ew-resize'}>
          {Math.round(tempoCopy)} BPM
        </Button>
      </motion.div>
    </Box>
  );
}

export default Tempo;
