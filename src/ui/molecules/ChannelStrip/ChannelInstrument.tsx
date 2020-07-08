import React, { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { availableSoulInstruments } from '../../../recoil/atoms/soulPatches';
import SoulInstrument from './SoulInstrument';
import ChannelPatch from './ChannelPatch';
import { soulInstance } from '../../../recoil/selectors/channel';

function ChannelInstrument() {
  const channelId = useContext(ChannelContext);
  const [activeInstrument, setActiveInstrument] = useRecoilState(soulInstance(channelId));
  const availableInstruments = useRecoilValue(availableSoulInstruments);

  return (
    <ChannelPatch activePatch={activeInstrument} patchList={availableInstruments} setActivePatch={setActiveInstrument} isInstrument>
      <SoulInstrument/>
    </ChannelPatch>
  );
}

export default React.memo(ChannelInstrument);
