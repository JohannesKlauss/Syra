import React, { useContext, useEffect, useState } from 'react';
import { Box, Slider, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { ChannelNode } from '../../../types/Channel';
import useSyraEngineChannel from '../../../hooks/engine/useSyraEngineChannel';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';

function Pan() {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const [panValue, setPanValue] = useState(channel.pan);
  const isPressed = useIsHotkeyPressed();

  const resetFader = () => setPanValue(0);

  useEffect(() => {
    channel.pan = panValue;
  }, [channel, panValue]);

  return (
    <Box px={2} bg={'transparent'}>
      <Slider
        value={panValue}
        min={-1}
        max={1}
        step={0.01}
        onChange={setPanValue}
        onMouseDown={() => isPressed('alt') && resetFader()}
        onDoubleClick={resetFader}
      >
        <SliderTrack />
        <SliderThumb zIndex={0} />
      </Slider>
    </Box>
  );
}

export default Pan;
