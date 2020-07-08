import React, { useRef } from 'react';
import {
  Divider,
  List,
  ListSubheader, styled,
} from '@material-ui/core';
import { splinterTheme } from '../theme';
import { ChannelContext } from '../providers/ChannelContext';
import ChannelInstrument from '../ui/molecules/ChannelStrip/ChannelInstrument';
import useTonePatcher from '../hooks/tone/useTonePatcher';
import { useRecoilValue } from 'recoil/dist';
import { channelState } from '../recoil/selectors/channel';
import ChannelPluginList from '../ui/molecules/ChannelStrip/ChannelPluginList';
const uniqid = require('uniqid');

const Channel = styled('div')({
  maxWidth: 170,
  backgroundColor: splinterTheme.palette.background.paper,
});

function UI_CHANNEL_EXPERIMENTAL() {
  const id = useRef(uniqid('channel-'));
  const { soulInstrument, soulPlugins, name } = useRecoilValue(channelState(id.current));

  useTonePatcher(soulPlugins, soulInstrument);

  return (
    <ChannelContext.Provider value={id.current}>
      <Channel>
        <List subheader={<ListSubheader>{name}</ListSubheader>}>
          <ChannelInstrument/>
        </List>
        <Divider/>
        <ChannelPluginList/>
      </Channel>
    </ChannelContext.Provider>
  );
}

export default React.memo(UI_CHANNEL_EXPERIMENTAL);
