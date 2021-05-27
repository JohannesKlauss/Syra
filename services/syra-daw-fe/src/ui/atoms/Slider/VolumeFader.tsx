import React, { useContext, useEffect } from 'react';
import { mapDbToVolumeFaderVal, mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { ChannelContext } from '../../../providers/ChannelContext';
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";
import { useIsHotkeyPressed } from "react-hotkeys-hook";
import { useRecoilState } from "recoil";
import { channelStore } from "../../../recoil/channelStore";

interface Props {
  onChange: (newVal: number) => void;
}

const reverseValueMapper = mapDbToVolumeFaderVal();

function VolumeFader({ onChange }: Props) {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const [volumeValue, setVolumeValue] = useRecoilState(channelStore.volume(channelId));
  const isPressed = useIsHotkeyPressed();

  const resetFader = () => setVolumeValue(0);

  // TODO: Currently this is super ugly. Since we cannot access a React context inside recoil effects, we have to double the assignment here.
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
