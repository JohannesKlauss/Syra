import React, { useContext } from 'react';
import { ChannelContext } from '../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { selectedChannelInstrument } from '../recoil/selectors/channel';
import { availableSoulInstruments } from '../recoil/atoms/soulPatches';
import SoulInstrument from './SoulInstrument';
import useSendMidiToSoul from '../hooks/soul/useSendMidiToSoul';
import ChannelPatch from './ChannelPatch';

function ChannelInstrument() {
  const channelId = useContext(ChannelContext);
  const [activeInstrument, setActiveInstrument] = useRecoilState(selectedChannelInstrument(channelId));
  const availableInstruments = useRecoilValue(availableSoulInstruments);
  const onNote = useSendMidiToSoul(activeInstrument);

  return (
    <ChannelPatch activePatch={activeInstrument} patchList={availableInstruments} setActivePatch={setActiveInstrument} isInstrument>
      {activeInstrument ? <SoulInstrument patch={activeInstrument.soulPatch} port={activeInstrument.audioNode.port} onNote={onNote}/> : null}
    </ChannelPatch>
  );
}

export default React.memo(ChannelInstrument);
