import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';

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
          <MenuButton size={size} as={Button} variantColor={color} rightIcon="chevron-down" onClick={onClick}>
            {label}
          </MenuButton>
          <MenuList>
            {menuItems.map(({ onClick, label }) => (
              <MenuItem onClick={onClick}>{label}</MenuItem>
            ))}
          </MenuList>
        </React.Fragment>
      </Menu>
    </>
  );
};

export default DropdownButton;
