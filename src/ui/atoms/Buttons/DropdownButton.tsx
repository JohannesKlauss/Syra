import React, { useRef, useState } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface Props {
  onClick: () => void;
  menuItems: JSX.Element[];
}

const DropdownButton: React.FC<Props> = React.memo(({ onClick, children, menuItems }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <ButtonGroup variant="contained" color="primary" ref={anchorRef} size={'small'}>
        <Button onClick={onClick} size={'small'}>
          {children}
        </Button>
        <Button color="primary" size="small" onClick={() => setIsMenuOpen(prev => !prev)}>
          <ArrowDropDownIcon/>
        </Button>
      </ButtonGroup>
      <Popper open={isMenuOpen} anchorEl={anchorRef.current} transition disablePortal style={{ zIndex: 2 }}>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
                <MenuList id="split-button-menu" onClick={() => setIsMenuOpen(false)}>
                  {menuItems}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
});

export default DropdownButton;
