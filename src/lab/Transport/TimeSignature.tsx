import React, { useCallback } from 'react';
import { Box, styled, TextField, Typography } from '@material-ui/core';
import { projectStore } from '../../recoil/projectStore';
import { useRecoilState } from 'recoil/dist';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';

const CustomTextField = styled(TextField)({
  maxWidth: 20,
  textAlign: 'center',
});

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
});

function TimeSignature() {
  const [timeSignature, setTimeSignature] = useRecoilState(projectStore.timeSignature);
  const transport = useToneJsTransport();

  const onChange = useCallback((value: number, isBeats: boolean) => {
    if (!isNaN(value)) {
      const beats = isBeats ? value : timeSignature.beats;
      const over = !isBeats ? value : timeSignature.over

      setTimeSignature({
        beats,
        over,
      });

      transport.set({timeSignature: beats * (4 / over)});
    }
  }, [setTimeSignature, timeSignature]);

  return (
    <BaseContainer>
      <CustomTextField defaultValue={timeSignature.beats} size={'small'}
                       onChange={e => onChange(parseInt(e.target.value), true)}/>
      <Typography variant="overline" component={'span'}>/</Typography>
      <CustomTextField defaultValue={timeSignature.over} size={'small'}
                       onChange={e => onChange(parseInt(e.target.value), false)}/>
    </BaseContainer>
  );
}

export default TimeSignature;
