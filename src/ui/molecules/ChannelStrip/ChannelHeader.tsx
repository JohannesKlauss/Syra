import React, { useState } from 'react';
import { Box, IconButton, styled } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChannelMenu from '../ChannelMenu/ChannelMenu';

const CustomBox = styled(Box)({
  display: 'flex',
});

function ChannelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CustomBox>
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
