import React, { useContext, useEffect, useState } from 'react';
import { mapDbToVolumeFaderVal, mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import { ChannelNode } from '../../../types/Channel';

interface Props {
  onChange: (newVal: number) => void;
}

const reverseValueMapper = mapDbToVolumeFaderVal();

function VolumeFader({ onChange }: Props) {
  const channelId = useContext(ChannelContext);
  const { volume } = useBackboneChannel(channelId);
  const [volumeValue, setVolumeValue] = useState(volume.get().volume);
  
  useEffect(() => {
    volume.set({ volume: volumeValue });
    onChange(volumeValue);
  }, [volume, volumeValue, onChange]);

  return (
    <Flex h={200} p={8} justify={'center'}>
      <Slider
        value={reverseValueMapper(volumeValue)}
        orientation={'vertical'}
        min={0}
        max={240}
        step={1}
        onChange={newValue => setVolumeValue(mapVolumeFaderValToDb(newValue))}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb zIndex={0} />
      </Slider>
    </Flex>
  );
}

export default VolumeFader;
