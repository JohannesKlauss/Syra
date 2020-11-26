import React from 'react';
import { mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";

interface Props {
  onChange: (newVal: number) => void;
}

function VolumeFader({ onChange }: Props) {
  return (
    <Flex h={200} p={8} justify={'center'}>
      <Slider defaultValue={180} orientation={'vertical'} min={0} max={240} step={1} onChange={newValue => onChange(mapVolumeFaderValToDb(newValue))}>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
    </Flex>
  );
}

export default VolumeFader;
