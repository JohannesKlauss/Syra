import React from 'react';
import { Button, Menu, MenuButton, MenuButtonProps, MenuItem, MenuList } from '@chakra-ui/react';
import { VscChevronDown } from 'react-icons/vsc';

type TMenuItem = {
  label: string;
  onClick: () => void;
};

interface Props extends MenuButtonProps {
  onClick: () => void;
  menuItems: ReadonlyArray<TMenuItem>;
  label: string;
  isFullWidth?: boolean;
  color?: string;
  size?: string;
}

const DropdownButton: React.FC<Props> = ({ onClick, menuItems, color, size, label, isFullWidth, ...props }) => {
  return (
    <>
      <Menu>
        <MenuButton
          mt={'-3px'}
          {...props}
          isFullWidth={isFullWidth}
          size={size}
          as={Button}
          colorScheme={color}
          rightIcon={<VscChevronDown />}
          onClick={onClick}
        >
          {label}
        </MenuButton>
        <MenuList zIndex={1000}>
          {menuItems.map(({ onClick, label }) => (
            <MenuItem key={label} onClick={onClick}>
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default DropdownButton;
