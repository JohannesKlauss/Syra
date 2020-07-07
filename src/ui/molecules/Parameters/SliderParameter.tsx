import React, { useCallback, useState } from 'react';
import { SoulPatchParameter } from '../../../types/SoulPatchDescriptor';
import { Grid, Slider, Typography } from '@material-ui/core';

interface Props {
  parameter: SoulPatchParameter;
  port: MessagePort;
}

const SliderParameter = React.memo(({ parameter, port }: Props) => {
  const { minValue, maxValue, index, initialValue, step, name, unit, id } = parameter;

  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((_, value) => {
    setValue(value);

    port.postMessage({
      type: 'PARAMETER_UPDATE',
      value: {
        parameterId: index,
        normalisedValue: value,
      },
    });
  }, [port, index]);
  
  return (
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography id="continuous-slider" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Slider defaultValue={initialValue as number}  min={minValue} max={maxValue} step={step} id={id} onChange={onChange}/>
        </Grid>
        <Grid item xs>
          <Typography id="continuous-slider" gutterBottom>
            {value} {unit}
          </Typography>
        </Grid>
      </Grid>
  );
});

export default SliderParameter;
