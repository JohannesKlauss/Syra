import React, { useContext } from 'react';
import { List, ListSubheader } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../../../recoil/selectors/channel';
import ChannelPlugin from './ChannelPlugin';
const uniqid = require('uniqid');

function ChannelPluginList() {
  const channelId = useContext(ChannelContext);
  const { soulPluginIds } = useRecoilValue(channelState(channelId));

  return (
    <List subheader={<ListSubheader>Plugins</ListSubheader>}>
      {soulPluginIds.map((id) => (
        <ChannelPlugin key={id} id={id}/>
      ))}
      <ChannelPlugin key={soulPluginIds.length} id={uniqid(`${channelId}-plugin-`)}/>
    </List>
  );
}

export default ChannelPluginList;
