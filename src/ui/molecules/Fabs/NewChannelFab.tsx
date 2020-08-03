import React, { useState } from 'react';
import { Backdrop } from '@material-ui/core';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import useCreateChannel from '../../../hooks/recoil/channel/useCreateChannel';
import useAvailableChannels from '../../../hooks/ui/channels/useAvailableChannels';

function NewChannelFab() {
  const [isOpen, setIsOpen] = useState(false);
  const createChannel = useCreateChannel();
  const actions = useAvailableChannels();

  return (
    <>
      <Backdrop open={isOpen} />
      <SpeedDial
        ariaLabel="Create new Channel"
        icon={<SpeedDialIcon />}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={isOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            tooltipPlacement={'right'}
            onClick={() => createChannel(action.type)}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default NewChannelFab;
