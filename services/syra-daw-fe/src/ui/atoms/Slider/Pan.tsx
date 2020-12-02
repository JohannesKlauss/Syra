import React from 'react';
import { Box, Slider, SliderThumb, SliderTrack } from "@chakra-ui/react";

interface Props {
  onChange: (newVal: number) => void;
}

function Pan({onChange}: Props) {
  return (
    <Box px={2} bg={'transparent'}>
      <Slider defaultValue={0} min={-100} max={100} step={1} onChange={onChange}>
        <SliderTrack />
        <SliderThumb />
      </Slider>
    </Box>
  );
}

export default Pan;
