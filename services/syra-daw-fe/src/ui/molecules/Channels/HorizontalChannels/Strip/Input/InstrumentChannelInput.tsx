import React, { useContext, useEffect } from "react";
import { ChannelContext } from '../../../../../../providers/ChannelContext';
import SoulPlugin from '../../../../SoulPlugin/SoulPlugin';
import { channelStore } from "../../../../../../recoil/channelStore";
import { useRecoilValue } from "recoil";
import useSyraEngineChannel from "../../../../../../hooks/engine/useSyraEngineChannel";
import { InstrumentChannel } from "../../../../../../engine/channels/InstrumentChannel";

function InstrumentChannelInput() {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));

  useEffect(() => {
    (channel as InstrumentChannel).instrument = soulInstance?.audioNode;
  }, [soulInstance, channel]);

  return (
    <SoulPlugin id={channelId} isInstrument={true}/>
  );
}

export default React.memo(InstrumentChannelInput);
