import React, { useContext, useEffect, useState } from 'react';
import { Box, Slider, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import { ChannelNode } from '../../../types/Channel';

function Pan() {
  const channelId = useContext(ChannelContext);
  const { pan, publishChange } = useBackboneChannel(channelId);
  const [panValue, setPanValue] = useState(pan.get().pan * 100);
  
  useEffect(() => {
    pan.set({pan: panValue / 100});
    publishChange(ChannelNode.PAN, panValue / 100);
  }, [panValue, pan, publishChange]);
  
  return (
    <Box px={2} bg={'transparent'}>
      <Slider value={panValue} min={-100} max={100} step={1} onChange={setPanValue}>
        <SliderTrack />
        <SliderThumb zIndex={0} />
      </Slider>
    </Box>
  );
}

export default Pan;
