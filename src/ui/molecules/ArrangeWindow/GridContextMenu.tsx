import React, { useCallback } from 'react';
import { ListItemIcon, ListItemText, Menu, MenuItem, styled } from '@material-ui/core';
import PanToolIcon from '@material-ui/icons/PanTool';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { useSetRecoilState } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { EditMode } from '../../../types/RegionManipulation';
import { useHotkeys } from 'react-hotkeys-hook';

const CustomCutIcon = styled(ViewAgendaIcon)({
  transform: 'rotate(90deg)',
})

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

  useHotkeys('t', () => {
    if (show) {
      setEditMode(EditMode.DEFAULT);
      onClose();
    }
  }, [show, onClose]);

  useHotkeys('i', () => {
    if (show) {
      setEditMode(EditMode.CUT);
      onClose();
    }
  }, [show, onClose]);

  return (
    <Menu open={show} onClose={onClose} anchorReference="anchorPosition" anchorPosition={{ top: y, left: x }}>
      <MenuItem onClick={() => onClick(EditMode.DEFAULT)}>
        <ListItemIcon>
          <PanToolIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText primary="Multi-tool"/>
      </MenuItem>
      <MenuItem onClick={() => onClick(EditMode.CUT)}>
        <ListItemIcon>
          <CustomCutIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText primary="Cut tool"/>
      </MenuItem>
    </Menu>
  );
}

export default GridContextMenu;
