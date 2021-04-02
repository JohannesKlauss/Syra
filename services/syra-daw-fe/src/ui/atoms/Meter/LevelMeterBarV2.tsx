import React, { useContext, useEffect } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { Box, Flex, useTheme } from '@chakra-ui/react';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil';
import { ChannelMode } from '../../../types/Channel';
import useSyraEngineChannel from '../../../hooks/engine/useSyraEngineChannel';
import { mapDbToUiMeterVal } from '../../../utils/levelMeterMapping';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const BAR_HEIGHT = 160;

interface StripProps {
  channelCount: number;
  index: number;
  channelId: string;
}

const Strip: React.FC<StripProps> = ({ channelCount, index, channelId }) => {
  const theme = useTheme();
  const height = useMotionValue(160);
  const y = useTransform(height, (height) => BAR_HEIGHT - height);
  const backgroundColor = useTransform(
    height,
    [0, 152, 153, 159, 160],
    [theme.colors.green[200], theme.colors.green[200], theme.colors.yellow[200], theme.colors.yellow[200], theme.colors.red[200]],
  );
  const channel = useSyraEngineChannel(channelId);

  useEffect(() => {
    let id: number;

    const frame = () => {
      const val = channel.rmsValue;

      if (channelCount === 1 && !(val as number[]).length) {
        height.set(mapDbToUiMeterVal(val as number));
      } else if (channelCount === 2 && (val as number[]).length) {
        height.set(mapDbToUiMeterVal((val as number[])[index]));
      }

      id = requestAnimationFrame(frame);
    };

    id = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(id);
    }
  }, [channel]);

  return (
    <Box width={channelCount === 1 ? '28px' : '12px'} pos={'absolute'} left={`${index * 16}px`}>
      <motion.div style={{ height, backgroundColor, y }} />
    </Box>
  );
};

const LevelMeterBarV2: React.FC = () => {
  const channelId = useContext(ChannelContext);
  const mode = useRecoilValue(channelStore.mode(channelId));

  return (
    <Flex w={'28px'} h={BAR_HEIGHT} mt={8} pos={'relative'} overflow={'hidden'} justify={'center'}>
      {mode === ChannelMode.STEREO ? (
        <>
          <Strip channelCount={2} index={0} channelId={channelId} />
          <Strip channelCount={2} index={1} channelId={channelId} />
        </>
      ) : (
        <Strip channelCount={1} index={0} channelId={channelId} />
      )}
    </Flex>
  );
};

export default LevelMeterBarV2;
