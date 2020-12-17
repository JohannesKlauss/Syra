import { Menu, MenuList, Portal, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useEffect } from "react";
import { ViewContext } from "../../../providers/ViewContext";
import ClickAwayListener from "react-click-away-listener";

interface Props {}

const ContextMenu: React.FC<Props> = ({children}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { viewRef } = useContext(ViewContext);

  useEffect(() => {
    viewRef.current?.addEventListener('contextmenu', e => {
      e.preventDefault();

      onOpen();
    });
  }, [viewRef]);

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Menu isLazy isOpen={isOpen}>
        <Portal>
          <MenuList>
            {children}
          </MenuList>
        </Portal>
      </Menu>
    </ClickAwayListener>
  );
};

export default ContextMenu;
