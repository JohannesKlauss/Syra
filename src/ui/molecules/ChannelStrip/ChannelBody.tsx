import React, { useCallback } from 'react';
import { Divider } from '@material-ui/core';
import ChannelPluginList from './ChannelPluginList';
import Pan from '../../atoms/Slider/Pan';
import VolumeFader from '../../atoms/Slider/VolumeFader';
import ChannelLetterButtons from './ChannelLetterButtons';
import * as Tone from 'tone';

interface Props {
  toneChannel: Tone.Channel;
}

function ChannelBody({toneChannel}: Props) {
  const onChangePanOrVolume = useCallback(newProps => toneChannel.set(newProps), [toneChannel]);

  return (
    <>
      <Divider/>
      <ChannelPluginList/>
      <Divider/>
      <Pan onChange={onChangePanOrVolume}/>
      <VolumeFader onChange={onChangePanOrVolume}/>
      <Divider/>
      <ChannelLetterButtons/>
    </>
  );
}

export default ChannelBody;
