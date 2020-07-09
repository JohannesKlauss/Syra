import React, { useContext } from 'react';
import Piano from '../Piano/Piano';
import ParameterList from '../Parameters/ParameterList';
import { Grid } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { soulInstance } from '../../../recoil/selectors/channel';

function SoulInstrument() {
  const channelId = useContext(ChannelContext);
  const activeInstrument = useRecoilValue(soulInstance(channelId));

  return (
    <Grid container>
      <ParameterList soulInstanceId={channelId} parameter={activeInstrument?.soulPatch.descriptor.parameters}/>
      <Piano min={48} max={65}/>
    </Grid>
  );
}

export default SoulInstrument;
