import React, { useState } from 'react';
import { IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useAvailableChannels from '../../../../../hooks/ui/channels/useAvailableChannels';
import useCreateChannel from '../../../../../hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../../../../types/Channel';
import { useHotkeys } from 'react-hotkeys-hook';

function AddChannelMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const actions = useAvailableChannels();
  const createChannel = useCreateChannel();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = async (type: ChannelType) => {
    handleClose();
    await createChannel(type);
  };

  useHotkeys('alt+cmd+a', () => {(async () => await createChannel(ChannelType.AUDIO))()});
  useHotkeys('alt+cmd+s', () => {(async () => await createChannel(ChannelType.INSTRUMENT))()});

  return (
    <>
      <IconButton onClick={handleClick} size={'small'} title={'Add Channel'}>
        <AddIcon/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
          {actions.map(action => (
            <MenuItem onClick={() => onClick(action.type)} key={action.type}>
              <ListItemIcon>
                {action.icon}
              </ListItemIcon>
              <Typography variant="inherit">{action.name}</Typography>
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}

export default AddChannelMenu;
