import { Menu, MenuList, Portal, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useHotkeys } from 'react-hotkeys-hook';

interface Props {
  children: ReadonlyArray<ReactNode>;
  hotkey?: string;
}

const ContextMenu: React.FC<Props> = ({ children, hotkey }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [offset, setOffset] = useState<[number, number]>([0, 0]);
  const [layerOffset, setLayerOffset] = useState<[number, number]>([0, 0]);
  const ref = useHotkeys<HTMLDivElement>(hotkey ?? '', onOpen);

  useEffect(() => {
    ref.current?.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      setOffset([e.clientX, e.clientY]);
      // @ts-ignore
      setLayerOffset([e.layerX, e.layerY]);

      onOpen();
    });
  }, [ref, onOpen, setOffset, setLayerOffset]);

  return (
    <>
      <div ref={ref}>{children[0]}</div>
      <ClickAwayListener onClickAway={onClose}>
        <Menu isLazy isOpen={isOpen} size={'xs'}>
          <Portal>
            <MenuList onClick={onClose} fontSize={'xs'} pos={'fixed'} left={offset[0]} top={offset[1]}>
              {
                // @ts-ignore TODO: For some reason the Children Types are incompatible. Check back to fix this.
                React.cloneElement(children[1], { offset: layerOffset })
              }
            </MenuList>
          </Portal>
        </Menu>
      </ClickAwayListener>
    </>
  );
};

export default ContextMenu;
