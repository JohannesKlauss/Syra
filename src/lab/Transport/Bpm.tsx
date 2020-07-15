import React from 'react';
import { Box, styled, TextField } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';

const CustomTextField = styled(TextField)({
  maxWidth: 60,
});

const BaseContainer = styled(Box)({
  marginLeft: 20,
  marginRight: 20,
});

function Bpm() {
  const [bpm, setBpm] = useRecoilState(projectStore.bpm);

  return (
    <BaseContainer>
      <CustomTextField value={bpm.toFixed(2)} label={'bpm'} size={'small'} onChange={e => setBpm(parseFloat(e.target.value))}/>
    </BaseContainer>
  );
}

export default Bpm;
