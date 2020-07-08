import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { availableSoulPlugins } from '../../../recoil/atoms/soulPatches';
import ParameterList from '../Parameters/ParameterList';
import ChannelPatch from './ChannelPatch';
import { soulInstance } from '../../../recoil/selectors/channel';

interface Props {
  id: string;
}

function ChannelPlugin({id}: Props) {
  const [activePlugin, setActivePlugin] = useRecoilState(soulInstance(id));
  const availablePlugins = useRecoilValue(availableSoulPlugins);

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
