import React from 'react';
import { styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';

const BaseContainer = styled('div')({
  height: 40,
  width: 250,
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  background: splinterTheme.palette.background.paper,
})

function VerticalChannelListHeader() {
  return (
    <BaseContainer>

    </BaseContainer>
  );
}

export default VerticalChannelListHeader;
