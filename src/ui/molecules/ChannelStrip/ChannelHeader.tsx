import React, { useState } from 'react';
import { Box, IconButton, styled } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChannelMenu from '../ChannelMenu/ChannelMenu';
import ChannelAudio from './ChannelAudio';

const CustomBox = styled(Box)({
  display: 'flex',
});

function ChannelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CustomBox>
      <ChannelAudio/>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={() => setIsMenuOpen(currVal => !currVal)}
      >
        <MoreVertIcon/>
      </IconButton>
      <ChannelMenu isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
    </CustomBox>
  );
}

export default React.memo(ChannelHeader);
