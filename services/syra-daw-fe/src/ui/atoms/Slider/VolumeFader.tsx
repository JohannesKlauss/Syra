import React from 'react';
import { mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";

interface Props {
  onChange: (newVal: number) => void;
}

function VolumeFader({ onChange }: Props) {
  return (
    <Flex h={200} p={8} justify={'center'}>
      <Slider defaultValue={0} orientation={'vertical'} min={-100} max={100} step={1} onChange={newValue => onChange(mapVolumeFaderValToDb(newValue))}>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
    </Flex>
  );
}

export default VolumeFader;
