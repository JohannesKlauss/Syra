import React, { useContext } from 'react';
import { ChannelContext } from '../../../../../../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import SoulInstrumentParameters from '../../../../SoulPlugin/SoulInstrumentParameters';
import SoulPluginOverlay from '../../../../SoulPlugin/SoulPluginOverlay';
import { soulPatchesStore } from '../../../../../../recoil/soulPatchesStore';
import { channelStore } from '../../../../../../recoil/channelStore';

function InstrumentChannelInput() {
  const channelId = useContext(ChannelContext);
  const [activeInstrument, setActiveInstrument] = useRecoilState(channelStore.soulInstance(channelId));
  const availableInstruments = useRecoilValue(soulPatchesStore.availableSoulInstruments);

  return (
    <SoulPluginOverlay activePatch={activeInstrument} patchList={availableInstruments} setActivePatch={setActiveInstrument} isInstrument>
      <SoulInstrumentParameters/>
    </SoulPluginOverlay>
  );
}

export default React.memo(InstrumentChannelInput);
