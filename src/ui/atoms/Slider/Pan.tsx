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
        min={-100}
        max={100}
        step={1}
        onChange={(_, newValue) => onChange({pan: newValue as number / 100})}
      />
    </Paper>
  );
}

export default Pan;
