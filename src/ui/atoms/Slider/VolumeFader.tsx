import React from 'react';
import { Slider, styled } from '@material-ui/core';

interface Props {
  onChange: (props: any) => void;
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
        defaultValue={0}
        min={-100}
        max={6}
        step={0.1}
        onChange={(_, newValue) => onChange({volume: newValue})}
      />
    </Container>
  );
}

export default VolumeFader;
