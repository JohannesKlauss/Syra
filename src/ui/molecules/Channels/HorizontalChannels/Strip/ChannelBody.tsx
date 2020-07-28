import React, { useCallback, useContext, useRef, useState } from 'react';
import {
  ClickAwayListener,
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
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import useToneAudioNodes from '../../../../../hooks/tone/useToneAudioNodes';
import LevelMeterVertical from '../../../../atoms/Meter/LevelMeterVertical';
import { ChannelNameContainer, ColoredDivider, SmrContainer, CustomTypography } from './ChannelBody.styled';

const ChannelBody: React.FC = React.memo(() => {
  const channelId = useContext(ChannelContext);
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const [channelName, setChannelName] = useRecoilState(channelStore.name(channelId));
  const [volumeFaderValue, setVolumeFaderValue] = useState(0);
  const [isEditingName, setIsEditingName] = useState(false);
  const editedName = useRef(channelName);

  const { channel } = useToneAudioNodes();
  const onChangePanOrVolume = useCallback(newProps => {
    channel.set(newProps);

    if (newProps.volume) {
      setVolumeFaderValue(newProps.volume < -95 ? '-∞' : newProps.volume.toFixed(1));
    }
  }, [channel]);

  const updateName = useCallback(() => {
    console.log('test');

    setIsEditingName(false);
    setChannelName(editedName.current);
  }, [setIsEditingName, setChannelName, editedName]);

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
            <LevelMeterVertical/>
          </Grid>
        </Grid>
      </Grid>
      <ColoredDivider channelColor={channelColor}/>
      <SmrContainer>
        <ChannelLetterButtons/>
      </SmrContainer>
      <ClickAwayListener onClickAway={updateName}>
        <ChannelNameContainer channelColor={channelColor}>
          <CustomTypography
            channelColor={channelColor}
            variant="overline"
            display="block"
            align={'center'}
            onDoubleClick={() => setIsEditingName(true)}
            contentEditable={isEditingName}
            // @ts-ignore
            onInput={(e) => editedName.current = e.target.innerText}
          >
            {channelName}
          </CustomTypography>
        </ChannelNameContainer>
      </ClickAwayListener>
    </>
  );
});

export default ChannelBody;
