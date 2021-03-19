import React, { useContext, useEffect, useState } from 'react';
import { mapDbToVolumeFaderVal, mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";
import { useIsHotkeyPressed } from "react-hotkeys-hook";

interface Props {
  onChange: (newVal: number) => void;
}

const reverseValueMapper = mapDbToVolumeFaderVal();

function VolumeFader({ onChange }: Props) {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const [volumeValue, setVolumeValue] = useState(channel.volume);
  const isPressed = useIsHotkeyPressed();

  const resetFader = () => setVolumeValue(0);
  
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
        onMouseDown={() => isPressed('alt') && resetFader()}
        onDoubleClick={resetFader}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb zIndex={0} />
      </Slider>
    </Flex>
  );
}

export default VolumeFader;
