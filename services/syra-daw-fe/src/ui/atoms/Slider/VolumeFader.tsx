import React, { useContext, useEffect, useState } from 'react';
import { mapDbToVolumeFaderVal, mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";

interface Props {
  onChange: (newVal: number) => void;
}

const reverseValueMapper = mapDbToVolumeFaderVal();

function VolumeFader({ onChange }: Props) {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const [volumeValue, setVolumeValue] = useState(channel.volume);
  
  useEffect(() => {
    channel.volume = volumeValue;
    onChange(volumeValue);
  }, [channel, volumeValue, onChange]);

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
