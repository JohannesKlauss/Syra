import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import { VscChevronDown } from "react-icons/vsc";

type TMenuItem = {
  label: string;
  onClick: () => void;
};

interface Props {
  onClick: () => void;
  menuItems: ReadonlyArray<TMenuItem>;
  label: string;
  color?: string;
  size?: string;
}

const DropdownButton: React.FC<Props> = ({ onClick, menuItems, color, size, label }) => {
  return (
    <>
      <Menu>
        <React.Fragment>
          <MenuButton size={size} as={Button} colorScheme={color} rightIcon={<VscChevronDown/>} onClick={onClick}>
            {label}
          </MenuButton>
          <MenuList>
            {menuItems.map(({ onClick, label }) => (
              <MenuItem key={label} onClick={onClick}>{label}</MenuItem>
            ))}
          </MenuList>
        </React.Fragment>
      </Menu>
    </>
  );
};

export default DropdownButton;
