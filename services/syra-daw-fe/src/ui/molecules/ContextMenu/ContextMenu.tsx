import { Menu, MenuList, Portal, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useRef, useState } from "react";
import ClickAwayListener from 'react-click-away-listener';

interface Props {
  children: ReadonlyArray<ReactNode>;
}

const ContextMenu: React.FC<Props> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [offset, setOffset] = useState<[number, number]>([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      setOffset([e.clientX, e.clientY]);

      onOpen();
    });
  }, [ref, onOpen, setOffset]);

  return (
    <>
      <div ref={ref}>{children[0]}</div>
      <ClickAwayListener onClickAway={onClose}>
        <Menu isLazy isOpen={isOpen} size={'xs'}>
          <Portal>
            <MenuList onClick={onClose} fontSize={'xs'} pos={'fixed'} left={offset[0]} top={offset[1]}>{children[1]}</MenuList>
          </Portal>
        </Menu>
      </ClickAwayListener>
    </>
  );
};

export default ContextMenu;
