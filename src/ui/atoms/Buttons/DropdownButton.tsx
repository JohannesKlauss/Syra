import React, { useMemo, useRef, useState } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper, PopperPlacementType, PropTypes, styled,
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
  menuPlacement?: PopperPlacementType;
}

const DropdownButton: React.FC<Props> = ({ onClick, prependingButton, children, menuItems, color = 'primary', menuPlacement, fullWidth, small }) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ButtonGroupComponent = useMemo(() => small ? CustomButtonGroup : ButtonGroup, [small]);

  return (
    <>
      <ButtonGroupComponent color={color} variant={'text'} size={'small'} fullWidth={fullWidth}>
        {prependingButton}
        <Button onClick={onClick} size={'small'}>
          {children}
        </Button>
        <CustomArrowButton color={color} size="small" onClick={() => setIsMenuOpen(prev => !prev)} ref={anchorRef}>
          <ArrowDropDownIcon/>
        </CustomArrowButton>
      </ButtonGroupComponent>
      <Popper open={isMenuOpen} anchorEl={anchorRef.current} transition style={{ zIndex: 2 }} placement={menuPlacement}>
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
