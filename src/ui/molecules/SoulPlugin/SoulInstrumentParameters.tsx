import React, { useContext } from 'react';
import Piano from '../Piano/Piano';
import ParameterList from './Parameters/ParameterList';
import { Grid } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';

function SoulInstrumentParameters() {
  const channelId = useContext(ChannelContext);
  const activeInstrument = useRecoilValue(channelStore.soulInstance(channelId));

  return (
    <Grid container>
      <ParameterList soulInstanceId={channelId} parameter={activeInstrument?.soulPatch.descriptor.parameters}/>
    </Grid>
  );
}

export default SoulInstrumentParameters;
