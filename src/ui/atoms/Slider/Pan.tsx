import React from 'react';
import { Paper, Slider, styled } from '@material-ui/core';

const BaseContainer = styled(Paper)({
  paddingLeft: 20,
  paddingRight: 20,
  background: 'transparent',
})

interface Props {
  onChange: (props: any) => void;
}

function Pan({onChange}: Props) {
  return (
    <BaseContainer>
      <Slider
        defaultValue={0}
        min={-100}
        max={100}
        step={1}
        onChange={(_, newValue) => onChange({pan: newValue as number / 100})}
      />
    </BaseContainer>
  );
}

export default Pan;
