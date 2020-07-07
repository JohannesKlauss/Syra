import React, { useRef } from 'react';
import SoulPatchList from './SoulPatchList';
import { availableSoulInstruments, availableSoulPlugins } from '../recoil/atoms/soulPatches';
import { useRecoilState } from 'recoil/dist';
import { Grid, Typography } from '@material-ui/core';
import SoulInstrument from './SoulInstrument';
import useChannel from '../hooks/audio/useChannel';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import useChannelPatcher from '../hooks/audio/useChannelPatcher';
const uniqid = require('uniqid');

interface Props {

}

function Instrument_Channel_Experimental({}: Props) {
  const id = useRef(uniqid('channel-'));

  const [availableInstruments] = useRecoilState(availableSoulInstruments);
  const [availablePlugins] = useRecoilState(availableSoulPlugins);
  const {onChangeInstrument, onChangePlugin} = useChannel(id.current);
  const {soulPlugins, soulInstrument, onNote} = useChannelPatcher(id.current);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Experimental Channel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SoulPatchList label={'Instrument'} patches={availableInstruments} onChange={onChangeInstrument}/>
        </Grid>
        <Grid item xs={9}>
          {soulInstrument && <SoulInstrument patch={soulInstrument.soulPatch} port={soulInstrument.audioNode.port} onNote={onNote}/>}
        </Grid>
        <Grid item xs={3}>
          <SoulPatchList multiple label={'Plugins'} patches={availablePlugins} onChange={onChangePlugin}/>
        </Grid>
        <Grid item xs={9}>
          {soulPlugins.map((plugin, i) => <ParameterList key={i} port={plugin.audioNode.port} parameters={plugin.soulPatch.descriptor.parameters}/>)}
        </Grid>
      </Grid>
    </>
  );
}

export default Instrument_Channel_Experimental;
