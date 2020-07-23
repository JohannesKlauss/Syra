import React, { useContext, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';
import { soulPatchesStore } from '../../../recoil/soulPatchesStore';
import ParameterList from './Parameters/ParameterList';
import SoulPluginOverlay from './SoulPluginOverlay';
import { ChannelContext } from '../../../providers/ChannelContext';

function SoulInstrument() {
  const channelId = useContext(ChannelContext);
  const [activePlugin, setActivePlugin] = useRecoilState(channelStore.soulInstance(channelId));
  const availablePlugins = useRecoilValue(soulPatchesStore.availableSoulPlugins);

  const modalContent = useMemo(() => (
    activePlugin ? <ParameterList soulInstanceId={channelId} parameter={activePlugin.soulPatch.descriptor.parameters}/> : null
  ), [channelId, activePlugin]);

  return (
    <SoulPluginOverlay activePatch={activePlugin} patchList={availablePlugins} setActivePatch={setActivePlugin}>
      {modalContent}
    </SoulPluginOverlay>
  );
}

export default SoulInstrument;
