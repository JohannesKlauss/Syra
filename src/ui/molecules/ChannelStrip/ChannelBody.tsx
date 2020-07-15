import React, { useCallback, useContext, useState } from 'react';
import { Divider, Grid, Paper, styled, Typography } from '@material-ui/core';
import ChannelPluginList from './ChannelPluginList';
import Pan from '../../atoms/Slider/Pan';
import VolumeFader from '../../atoms/Slider/VolumeFader';
import ChannelLetterButtons from './ChannelLetterButtons';
import * as Tone from 'tone';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil/dist';

interface ColoredDividerProps {
  color: string;
}

const ColoredDivider = styled(Divider)({
  backgroundColor: ({color}: ColoredDividerProps) => color,
});

const SmrContainer = styled(Paper)({
  padding: 10,
});

interface Props {
  toneChannel: Tone.Channel;
}

const ChannelBody: React.FC<Props> = React.memo(({ toneChannel, children }) => {
  const channelId = useContext(ChannelContext);
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const [volumeFaderValue, setVolumeFaderValue] = useState(0);
  const onChangePanOrVolume = useCallback(newProps => {
    toneChannel.set(newProps);

    if (newProps.volume) {
      setVolumeFaderValue(newProps.volume < -95 ? '-∞' : newProps.volume.toFixed(1));
    }
  }, [toneChannel]);

  return (
    <>
      <Divider/>
      <ChannelPluginList/>
      <Divider/>
      <Pan onChange={onChangePanOrVolume}/>
      <Grid container justify="center" spacing={1}>
        <Grid container justify={'center'}>
          <Grid item xs={6}>
            <Typography gutterBottom align={'center'}>
              {volumeFaderValue}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom align={'center'}>
              {volumeFaderValue}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={'center'}>
          <Grid item xs={6}>
            <VolumeFader onChange={onChangePanOrVolume}/>
          </Grid>
          <Grid item xs={6}>
            {children}
          </Grid>
        </Grid>
      </Grid>
      <ColoredDivider color={channelColor}/>
      <SmrContainer>
        <ChannelLetterButtons/>
      </SmrContainer>
    </>
  );
});

export default ChannelBody;
