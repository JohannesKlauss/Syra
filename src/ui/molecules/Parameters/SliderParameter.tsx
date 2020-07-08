import React, { useCallback } from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { soulInstance, soulPatchParameter } from '../../../recoil/selectors/channel';

interface Props {
  soulInstanceId: string;
  parameterId: string;
}

const SliderParameter = React.memo(({ soulInstanceId, parameterId }: Props) => {
  const patch = useRecoilValue(soulInstance(soulInstanceId));
  const [parameter, setParameter] = useRecoilState(soulPatchParameter({soulInstanceId, parameterId}));

  const { minValue, maxValue, index, initialValue, value, step, name, unit, id } = parameter;

  const onChange = useCallback((_, newValue) => {
    patch?.audioNode.port.postMessage({
      type: 'PARAMETER_UPDATE',
      value: {
        parameterId: index,
        normalisedValue: newValue,
      },
    });

    setParameter(currVal => ({
      ...currVal,
      value: newValue,
    }));
  }, [patch, index, setParameter]);
  
  return (
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography id="continuous-slider" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Slider defaultValue={value as number || initialValue as number}  min={minValue} max={maxValue} step={step} id={id} onChange={onChange}/>
        </Grid>
        <Grid item xs>
          <Typography id="continuous-slider" gutterBottom>
            {value || initialValue} {unit}
          </Typography>
        </Grid>
      </Grid>
  );
});

export default SliderParameter;
