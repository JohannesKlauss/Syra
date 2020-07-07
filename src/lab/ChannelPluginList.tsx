import React, { useContext } from 'react';
import { List, ListSubheader } from '@material-ui/core';
import { ChannelContext } from '../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../recoil/selectors/channel';
import ChannelPlugin from './ChannelPlugin';

function ChannelPluginList() {
  const channelId = useContext(ChannelContext);
  const {soulPlugins} = useRecoilValue(channelState(channelId));

  return (
    <List subheader={<ListSubheader>Plugins</ListSubheader>} >
      {soulPlugins.map((_, i) => <ChannelPlugin key={i} index={i}/>)}
      <ChannelPlugin index={soulPlugins.length}/>
    </List>
  );
}

export default ChannelPluginList;
