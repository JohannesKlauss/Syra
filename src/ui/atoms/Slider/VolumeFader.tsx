import React from 'react';
import { Paper, Slider } from '@material-ui/core';

interface Props {
  onChange: (props: any) => void;
}

function VolumeFader({onChange}: Props) {
  return (
    <Paper style={{height: 200, padding: 20, margin: '0 auto'}}>
      <Slider
        orientation="vertical"
        defaultValue={0}
        min={-100}
        max={6}
        step={0.1}
        onChange={(_, newValue) => onChange({volume: newValue})}
      />
    </Paper>
  );
}

export default VolumeFader;
