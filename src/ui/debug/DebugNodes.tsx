import React from 'react';
import DebugPlayers from './toneJsNodes/DebugPlayers';
import DebugChannel from './toneJsNodes/DebugChannel';
import { Typography } from '@material-ui/core';
import CustomAccordion from './CustomAccordion';

function DebugNodes() {
  return (
    <>
      <Typography variant={'h5'}>Tone JS Nodes</Typography>
      <>
        <CustomAccordion title={'Channel'} key={'channel'}><DebugChannel/></CustomAccordion>
        <CustomAccordion title={'Players'} key={'players'}><DebugPlayers/></CustomAccordion>
      </>
    </>
  );
}

export default DebugNodes;
