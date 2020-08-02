import React from 'react';
import { styled } from '@material-ui/core';
import { splinterTheme } from '../../../theme';

const BaseContainer = styled('div')(({theme}) => ({
  height: 40,
  width: 250,
  borderBottom: `1px solid ${theme.palette.background.default}`,
  background: theme.palette.background.paper,
}));

function VerticalChannelListHeader() {
  return (
    <BaseContainer>

    </BaseContainer>
  );
}

export default VerticalChannelListHeader;
