import React, { useCallback, useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
import ChannelPluginList from './ChannelPluginList';
import Pan from '../../atoms/Slider/Pan';
import VolumeFader from '../../atoms/Slider/VolumeFader';
import ChannelLetterButtons from './ChannelLetterButtons';
import * as Tone from 'tone';

interface Props {
  toneChannel: Tone.Channel;
}

const ChannelBody: React.FC<Props> = React.memo(({ toneChannel, children }) => {
  const [volumeFaderValue, setVolumeFaderValue] = useState(0);
  const onChangePanOrVolume = useCallback(newProps => {
    toneChannel.set(newProps);

    if (newProps.volume) {
      setVolumeFaderValue(newProps.volume.toFixed(1));
    }
  }, [toneChannel]);

  return (
    <>
      <Divider/>
      <ChannelPluginList/>
      <Divider/>
      <Pan onChange={onChangePanOrVolume}/>
      <Grid container justify="center" spacing={1}>
        <Grid item>
          {volumeFaderValue}
          <VolumeFader onChange={onChangePanOrVolume}/>
        </Grid>
        <Grid item>
          {children}
        </Grid>
      </Grid>
      <Divider/>
      <ChannelLetterButtons/>
    </>
  );
});

export default ChannelBody;
