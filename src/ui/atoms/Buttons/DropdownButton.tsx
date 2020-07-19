import React, { useMemo, useRef, useState } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper, PropTypes, styled,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const CustomButtonGroup = styled(ButtonGroup)({
  maxHeight: 25,
});

const CustomArrowButton = styled(Button)({
  flex: 1,
});

interface Props {
  onClick: () => void;
  menuItems: JSX.Element[];
  color?: PropTypes.Color;
  prependingButton?: JSX.Element;
  small?: boolean;
  fullWidth?: boolean;
}

const DropdownButton: React.FC<Props> = ({ onClick, children, menuItems, color = 'primary', fullWidth, small }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ButtonGroupComponent = useMemo(() => small ? CustomButtonGroup : ButtonGroup, [small]);

  return (
    <>
      <ButtonGroupComponent color={color} ref={anchorRef} variant={'text'} size={'small'} fullWidth={fullWidth}>
        <Button onClick={onClick} size={'small'}>
          {children}
        </Button>
        <CustomArrowButton color={color} size="small" onClick={() => setIsMenuOpen(prev => !prev)}>
          <ArrowDropDownIcon/>
        </CustomArrowButton>
      </ButtonGroupComponent>
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
};

export default DropdownButton;
