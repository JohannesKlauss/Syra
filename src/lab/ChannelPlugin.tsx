import React, { useContext } from 'react';
import { ChannelContext } from '../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { channelPluginByIndex } from '../recoil/selectors/channel';
import { availableSoulPlugins } from '../recoil/atoms/soulPatches';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import ChannelPatch from './ChannelPatch';

interface Props {
  index: number;
}

function ChannelPlugin({index}: Props) {
  const channelId = useContext(ChannelContext);
  const [activePlugin, setActivePlugin] = useRecoilState(channelPluginByIndex({channelId, index}));
  const availablePlugins = useRecoilValue(availableSoulPlugins);

  return (
    <ChannelPatch activePatch={activePlugin} patchList={availablePlugins} setActivePatch={setActivePlugin}>
      {activePlugin ? <ParameterList parameters={activePlugin.soulPatch.descriptor.parameters} port={activePlugin.audioNode.port}/> : null}
    </ChannelPatch>
  );
}

export default ChannelPlugin;
