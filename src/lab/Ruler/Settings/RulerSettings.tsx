import React from 'react';
import { Box, Divider, styled } from '@material-ui/core';
import { splinterTheme } from '../../../theme';
import RulerZoomInOut from './RulerZoomInOut';
import RulerSnapSettings from './RulerSnapSettings';
import RulerCycleSettings from './RulerCycleSettings';

const BaseContainer = styled(Box)({
  width: '100%',
  height: 40,
  display: 'flex',
  flexFlow: 'row-reverse',
  position: 'relative',
  paddingBottom: 10,
  zIndex: 20,
  paddingRight: 10,
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  backgroundColor: splinterTheme.palette.background.paper,
});

function RulerSettings() {
  return (
    <BaseContainer>
      <RulerSnapSettings/>
      <Divider variant={'inset'}/>
      <RulerZoomInOut/>
      <Divider variant={'inset'}/>
      <RulerCycleSettings/>
    </BaseContainer>
  );
}

export default RulerSettings;
