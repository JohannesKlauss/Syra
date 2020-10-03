import React from 'react';
import { Slider, styled } from '@material-ui/core';
import { mapVolumeFaderValToDb } from '../../../utils/volumeFaderMapping';

interface Props {
  onChange: (newVal: number) => void;
}

const Container = styled('div')({
  height: 200,
  padding: 20,
  margin: '0 auto'
});

function VolumeFader({onChange}: Props) {
  return (
    <Container>
      <Slider
        orientation="vertical"
        defaultValue={180}
        min={0}
        max={240}
        step={1}
        onChange={(_, newValue) => onChange(mapVolumeFaderValToDb(newValue as number))}
      />
    </Container>
  );
}

export default VolumeFader;
