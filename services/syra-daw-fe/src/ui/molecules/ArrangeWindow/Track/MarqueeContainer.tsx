import React, { useCallback, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import useSnapCtrlPixelCalc from '../../../../hooks/ui/useSnapCtrlPixelCalc';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { useHotkeys } from 'react-hotkeys-hook';
import useCutRegionAtMarqueeIndicator from '../../../../hooks/recoil/track/useCutRegionAtMarqueeIndicator';
import { Box } from '@chakra-ui/react';
import {motion} from "framer-motion";

interface MarqueeIndicatorProps {
  left: number;
}

const MarqueeIndicator: React.FC<MarqueeIndicatorProps> = ({ left }) => (
  <Box
    borderLeft={'1px solid white'}
    h={'200%'}
    pos={'absolute'}
    left={left}
    animation={'marqueeBlink 1s infinite ease-in-out'}
  />
);

function MarqueeContainer() {
  const channelId = useContext(ChannelContext);

  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const [marqueeChannelPosition, setMarqueeChannelPosition] = useRecoilState(arrangeWindowStore.marqueeChannelPosition);
  const [marqueePosition, setMarqueePosition] = useRecoilState(arrangeWindowStore.marqueePosition);
  const calcSnappedX = useSnapCtrlPixelCalc();
  const maybeCutRegion = useCutRegionAtMarqueeIndicator();

  useHotkeys('b', maybeCutRegion);

  const onSetMarquee = useCallback(
    (e) => {
      const y = e.clientY - e.target.getBoundingClientRect().top;
      const x = e.clientX - e.target.getBoundingClientRect().left;

      if (y <= trackHeight / 2) {
        setMarqueePosition(calcSnappedX(x));
        setMarqueeChannelPosition(channelId);
      }
    },
    [calcSnappedX, trackHeight, setMarqueePosition, setMarqueeChannelPosition, channelId],
  );

  let content = null;

  if (marqueePosition && marqueeChannelPosition === channelId) {
    content = <MarqueeIndicator left={marqueePosition} />;
  }

  return (
    <motion.div animate={{opacity: 0}} transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.74
    }}>
      <Box
        h={'50%'}
        w={'100%'}
        pos={'absolute'}
        top={0}
        left={0}
        cursor={'text'}
        zIndex={10}
        userSelect={'none'}
        onMouseDown={onSetMarquee}
        onContextMenu={e => e.preventDefault()}
      >
        {content}
      </Box>
    </motion.div>
  );
}

export default MarqueeContainer;
