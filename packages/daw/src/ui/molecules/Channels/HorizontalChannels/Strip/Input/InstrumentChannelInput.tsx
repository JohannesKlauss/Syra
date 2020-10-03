import React, { useContext } from 'react';
import { ChannelContext } from '../../../../../../providers/ChannelContext';
import SoulPlugin from '../../../../SoulPlugin/SoulPlugin';

function InstrumentChannelInput() {
  const channelId = useContext(ChannelContext);

  return (
    <SoulPlugin id={channelId} isInstrument={true}/>
  );
}

export default React.memo(InstrumentChannelInput);
