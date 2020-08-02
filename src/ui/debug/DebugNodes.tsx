import React from 'react';
import DebugPlayers from './toneJsNodes/DebugPlayers';
import DebugToneJsChannel from './toneJsNodes/DebugToneJsChannel';
import { Typography } from '@material-ui/core';
import CustomAccordion from './CustomAccordion';

function DebugNodes() {
  return (
    <>
      <Typography variant={'h5'}>Tone JS Nodes</Typography>
      <>
        <CustomAccordion title={'ToneChannel'} key={'Tone-channel'}><DebugToneJsChannel/></CustomAccordion>
        <CustomAccordion title={'Players'} key={'players'}><DebugPlayers/></CustomAccordion>
      </>
    </>
  );
}

export default DebugNodes;
