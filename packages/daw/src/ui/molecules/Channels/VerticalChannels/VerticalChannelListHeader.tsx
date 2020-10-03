import React from 'react';
import { styled } from '@material-ui/core';
import AddChannelMenu from './Header/AddChannelMenu';

const BaseContainer = styled('div')(({theme}) => ({
  height: 40,
  width: 250,
  padding: 5,
  borderBottom: `1px solid ${theme.palette.background.default}`,
  background: theme.palette.background.paper,
}));

function VerticalChannelListHeader() {
  return (
    <BaseContainer>
      <AddChannelMenu/>
    </BaseContainer>
  );
}

export default VerticalChannelListHeader;
