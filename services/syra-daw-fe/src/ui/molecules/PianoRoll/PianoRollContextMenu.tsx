import React from 'react';
import { MenuGroup, MenuItem, Text } from '@chakra-ui/react';
import { FaMousePointer } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { pianoRollStore } from '../../../recoil/pianoRollStore';
import { GridMouseMode } from '../../../types/GridMouseMode';

interface Props {}

const PianoRollContextMenu: React.FC<Props> = ({}) => {
  const setMouseMode = useSetRecoilState(pianoRollStore.mouseMode);

  return (
    <>
      <MenuGroup>
        <MenuItem icon={<FaMousePointer />} command={'T'} onClick={() => setMouseMode(GridMouseMode.PAINT)}>
          Pointer Tool
        </MenuItem>
        <MenuItem icon={<Text>V</Text>} command={'V'} onClick={() => setMouseMode(GridMouseMode.VELOCITY)}>
          Velocity Tool
        </MenuItem>
      </MenuGroup>
    </>
  );
};

export default PianoRollContextMenu;
