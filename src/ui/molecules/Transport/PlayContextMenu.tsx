import React from 'react';
import { Checkbox, FormControlLabel, Menu, MenuItem } from '@material-ui/core';

interface Props {
  open: boolean;
  onClose: () => void;
}

function PlayContextMenu({open, onClose}: Props) {
  return (
    <Menu open={open} onClose={onClose}>
      <MenuItem onClick={() => null}>
        <FormControlLabel
          control={<Checkbox checked={true} onChange={() => null} />}
          label="Start at cycle"
        />
      </MenuItem>
      <MenuItem onClick={() => null}>
        <FormControlLabel
          control={<Checkbox checked={false} onChange={() => null} />}
          label="Start at selected region"
        />
      </MenuItem>
      <MenuItem onClick={() => null}>
        <FormControlLabel
          control={<Checkbox checked={false} onChange={() => null} />}
          label="Start at last set cursor position"
        />
      </MenuItem>
    </Menu>
  );
}

export default PlayContextMenu;
