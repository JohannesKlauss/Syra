import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import ParameterList from './Parameters/ParameterList';
import SoulPluginOverlay from './SoulPluginOverlay';
import { channelStore } from '../../../recoil/channelStore';
import { soulPatchesStore } from '../../../recoil/soulPatchesStore';

interface Props {
  id: string;
}

function SoulPlugin({id}: Props) {
  const [activePlugin, setActivePlugin] = useRecoilState(channelStore.soulInstance(id));
  const availablePlugins = useRecoilValue(soulPatchesStore.availableSoulPlugins);

  const modalContent = useMemo(() => (
    activePlugin ? <ParameterList soulInstanceId={id} parameter={activePlugin.soulPatch.descriptor.parameters}/> : null
  ), [id, activePlugin]);

  return (
    <SoulPluginOverlay activePatch={activePlugin} patchList={availablePlugins} setActivePatch={setActivePlugin}>
      {modalContent}
    </SoulPluginOverlay>
  );
}

export default SoulPlugin;
