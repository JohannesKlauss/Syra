import React, { useEffect } from 'react';
import { Box, styled, TextField } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';

const CustomTextField = styled(TextField)({
  maxWidth: 60,
});

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
});

function Bpm() {
  const [bpm, setBpm] = useRecoilState(projectStore.bpm);
  const transport = useToneJsTransport();

  useEffect(() => {
    transport.set({bpm});
  }, [bpm]);

  return (
    <BaseContainer>
      <CustomTextField value={bpm.toFixed(2)} label={'bpm'} size={'small'} onChange={e => setBpm(parseFloat(e.target.value))}/>
    </BaseContainer>
  );
}

export default Bpm;
