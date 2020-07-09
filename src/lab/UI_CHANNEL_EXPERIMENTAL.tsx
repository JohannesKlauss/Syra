import React, { useCallback, useContext } from 'react';
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
import { channelName } from '../recoil/selectors/channel';
import ChannelPluginList from '../ui/molecules/ChannelStrip/ChannelPluginList';
import Pan from '../ui/atoms/Slider/Pan';
import VolumeFader from '../ui/atoms/Slider/VolumeFader';
import ChannelLetterButtons from '../ui/molecules/ChannelStrip/ChannelLetterButtons';
import useMidiForChannel from '../hooks/audio/useMidiForChannel';

const Channel = styled('div')({
  maxWidth: 170,
  backgroundColor: splinterTheme.palette.background.paper,
});

function UI_CHANNEL_EXPERIMENTAL() {
  const channelId = useContext(ChannelContext);
  const name = useRecoilValue(channelName(channelId));
  const channel = useTonePatcher();

  const onChangePanOrVolume = useCallback(newProps => {
    channel && channel.set(newProps);
  }, [channel]);

  useMidiForChannel();

  return (
    <Channel>
      <List subheader={<ListSubheader>{name}</ListSubheader>}>
        <ChannelInstrument/>
      </List>
      <Divider/>
      <ChannelPluginList/>
      <Divider/>
      <Pan onChange={onChangePanOrVolume}/>
      <VolumeFader onChange={onChangePanOrVolume}/>
      <Divider/>
      <ChannelLetterButtons/>
    </Channel>
  );
}

export default React.memo(UI_CHANNEL_EXPERIMENTAL);
