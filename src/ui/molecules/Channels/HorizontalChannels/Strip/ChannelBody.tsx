import React, { useCallback, useContext, useState } from 'react';
import {
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import ChannelPluginList from '../../../Plugins/ChannelPluginList';
import Pan from '../../../../atoms/Slider/Pan';
import VolumeFader from '../../../../atoms/Slider/VolumeFader';
import ChannelLetterButtons from '../../ChannelLetterButtons';
import { ChannelContext } from '../../../../../providers/ChannelContext';
import { channelStore } from '../../../../../recoil/channelStore';
import { useRecoilValue } from 'recoil/dist';
import LevelMeterVertical from '../../../../atoms/Meter/LevelMeterVertical';
import { ColoredDivider, SmrContainer } from './ChannelBody.styled';
import ChannelName from '../../ChannelName';
import useBackboneChannel from '../../../../../hooks/tone/BackboneMixer/useBackboneChannel';

const ChannelBody: React.FC = React.memo(() => {
  const channelId = useContext(ChannelContext);
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const [volumeFaderValue, setVolumeFaderValue] = useState(0);

  const { volume, pan } = useBackboneChannel(channelId);

  const onChangeVolume = useCallback(newVal => {
    volume.set({volume: newVal});

    setVolumeFaderValue(newVal < -95 ? '-∞' : newVal.toFixed(1));
  }, [pan]);

  return (
    <>
      <Divider/>
      <ChannelPluginList/>
      <Divider/>
      <Pan onChange={newVal => pan.set({pan: newVal})}/>
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
            <VolumeFader onChange={onChangeVolume}/>
          </Grid>
          <Grid item xs={6}>
            <LevelMeterVertical/>
          </Grid>
        </Grid>
      </Grid>
      <ColoredDivider channelColor={channelColor}/>
      <SmrContainer>
        <ChannelLetterButtons/>
      </SmrContainer>
      <ChannelName backgroundColor={channelColor}/>
    </>
  );
});

export default ChannelBody;
