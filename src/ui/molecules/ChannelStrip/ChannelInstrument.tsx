import React, { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import SoulInstrument from './SoulInstrument';
import ChannelPatch from './ChannelPatch';
import { soulPatchesStore } from '../../../recoil/soulPatchesStore';
import { channelStore } from '../../../recoil/channelStore';

function ChannelInstrument() {
  const channelId = useContext(ChannelContext);
  const [activeInstrument, setActiveInstrument] = useRecoilState(channelStore.soulInstance(channelId));
  const availableInstruments = useRecoilValue(soulPatchesStore.availableSoulInstruments);

  return (
    <ChannelPatch activePatch={activeInstrument} patchList={availableInstruments} setActivePatch={setActiveInstrument} isInstrument>
      <SoulInstrument/>
    </ChannelPatch>
  );
}

export default React.memo(ChannelInstrument);
