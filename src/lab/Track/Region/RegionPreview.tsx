import React, { useContext } from 'react';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';
import useRegionWidth from '../../../hooks/ui/region/useRegionWidth';
import Waveform from '../../Waveform/Waveform';
import { Paper, PaperProps, styled } from '@material-ui/core';
import { RegionContext } from '../../../providers/RegionContext';
import { regionStore } from '../../../recoil/regionStore';
import { useIsHotkeyPressed } from 'react-hotkeys-hook';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

interface BaseContainerProps {
  color: string;
  translateX: number;
  width?: number;
}

const BaseContainer = styled(
  ({ color, translateX, width, ...other }: BaseContainerProps & Omit<PaperProps, keyof BaseContainerProps>) =>
    <Paper {...other} />,
)({
  opacity: 0.85,
  marginTop: ({ width }: BaseContainerProps) => width ? 0 : -2,
  border: ({ width }: BaseContainerProps) => width
    ? `0px 2px 0px 0px solid white`
    : '2px solid white',
  width: ({ width }: BaseContainerProps) => width ? width : 'initial',
  backgroundColor: ({ color }: BaseContainerProps) => color,
  willChange: 'transform',
  position: 'relative',
  transform: ({ translateX }: BaseContainerProps) => `translateX(${translateX}px)`,
  zIndex: 2,
});

const DuplicateIcon = styled(ControlPointIcon)({
  position: 'absolute',
  top: 0,
  left: 0,
});

interface Props {
  translateX: number;
  width?: number;
}

function RegionPreview({ translateX, width }: Props) {
  const channelId = useContext(ChannelContext);
  const regionId = useContext(RegionContext);
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const regionWidth = useRegionWidth();
  const isPressed = useIsHotkeyPressed();

  return (
    <BaseContainer color={channelColor} translateX={translateX} width={width}>
      {isPressed('alt') && <DuplicateIcon color={'action'}/>}
      {audioBuffer && <Waveform audioBuffer={audioBuffer.get()} height={68} width={regionWidth - 4}/>}
    </BaseContainer>
  );
}

export default RegionPreview;
