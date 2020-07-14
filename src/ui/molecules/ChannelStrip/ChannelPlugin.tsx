import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import ParameterList from '../Parameters/ParameterList';
import ChannelPatch from './ChannelPatch';
import { channelStore } from '../../../recoil/channelStore';
import { soulPatchesStore } from '../../../recoil/soulPatches';

interface Props {
  id: string;
}

function ChannelPlugin({id}: Props) {
  const [activePlugin, setActivePlugin] = useRecoilState(channelStore.soulInstance(id));
  const availablePlugins = useRecoilValue(soulPatchesStore.availableSoulPlugins);

  const modalContent = useMemo(() => (
    activePlugin ? <ParameterList soulInstanceId={id} parameter={activePlugin.soulPatch.descriptor.parameters}/> : null
  ), [id, activePlugin]);

  return (
    <ChannelPatch activePatch={activePlugin} patchList={availablePlugins} setActivePatch={setActivePlugin}>
      {modalContent}
    </ChannelPatch>
  );
}

export default ChannelPlugin;
