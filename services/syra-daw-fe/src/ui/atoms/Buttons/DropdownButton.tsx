import React from 'react';
import { Button, ButtonProps, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { VscChevronDown } from 'react-icons/vsc';

type TMenuItem = {
  label: string;
  onClick: () => void;
};

interface Props extends ButtonProps {
  menuItems: ReadonlyArray<TMenuItem>;
  label: string;
}

const DropdownButton: React.FC<Props> = ({ menuItems, label, ...props }) => {
  return (
    <>
      <Menu>
        <MenuButton
          mt={'-3px'}
          {...props}
          as={Button}
          rightIcon={<VscChevronDown />}
        >
          {label}
        </MenuButton>
        <MenuList>
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
