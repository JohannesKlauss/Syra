import React, { useCallback } from 'react';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import PanToolIcon from '@material-ui/icons/PanTool';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { EditMode } from '../../../types/RegionManipulation';

interface Props {
  x: number;
  y: number;
  show: boolean;
  onClose: () => void;
}

function GridContextMenu({show, x, y, onClose}: Props) {
  const setEditMode = useSetRecoilState(arrangeWindowStore.editMode);

  const onClick = useCallback(editMode => {
    setEditMode(editMode);
    onClose();
  }, [setEditMode, onClose]);

  return (
    <Menu open={show} onClose={onClose} anchorReference="anchorPosition" anchorPosition={{ top: y, left: x }}>
      <MenuItem onClick={() => onClick(EditMode.DEFAULT)}>
        <ListItemIcon>
          <PanToolIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Pointer tool" />
      </MenuItem>
      <MenuItem onClick={() => onClick(EditMode.CUT)}>
        <ListItemIcon>
          <VerticalSplitIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Cut tool" />
      </MenuItem>
    </Menu>
  );
}

export default GridContextMenu;
