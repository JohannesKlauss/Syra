import React from 'react';
import { Paper, Slider } from '@material-ui/core';

interface Props {
  onChange: (props: any) => void;
}

function Pan({onChange}: Props) {
  return (
    <Paper style={{paddingLeft: 20, paddingRight: 20}}>
      <Slider
        defaultValue={0}
        min={-1}
        max={1}
        step={0.1}
        onChange={(_, newValue) => onChange({pan: newValue})}
      />
    </Paper>
  );
}

export default Pan;
