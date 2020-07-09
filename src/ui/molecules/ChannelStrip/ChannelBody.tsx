import React, { useCallback } from 'react';
import { Divider } from '@material-ui/core';
import ChannelPluginList from './ChannelPluginList';
import Pan from '../../atoms/Slider/Pan';
import VolumeFader from '../../atoms/Slider/VolumeFader';
import ChannelLetterButtons from './ChannelLetterButtons';
import useTonePatcher from '../../../hooks/tone/useTonePatcher';

function ChannelBody() {
  const channel = useTonePatcher();

  const onChangePanOrVolume = useCallback(newProps => {
    channel && channel.set(newProps);
  }, [channel]);

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
