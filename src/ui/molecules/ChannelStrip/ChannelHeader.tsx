import React, { useContext, useState } from 'react';
import { Box, IconButton, styled } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChannelMenu from '../ChannelMenu/ChannelMenu';
import ChannelAudio from './ChannelAudio';
import { useRecoilValue } from 'recoil/dist';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import { ChannelType } from '../../../types/Channel';
import ChannelInstrument from './ChannelInstrument';

const CustomBox = styled(Box)({
  display: 'flex',
});

function ChannelHeader() {
  const channelId = useContext(ChannelContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const channelType = useRecoilValue(channelStore.type(channelId));

  return (
    <CustomBox>
      {channelType === ChannelType.AUDIO ? <ChannelAudio/> : <ChannelInstrument/>}
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
