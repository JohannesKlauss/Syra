import { Menu, MenuList, Portal, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import ClickAwayListener from 'react-click-away-listener';
import { useHotkeys } from 'react-hotkeys-hook';
import { useSetRecoilState } from "recoil";
import { editorStore } from "../../../recoil/editorStore";

interface Props {
  children: ReadonlyArray<ReactNode>;
  hotkey?: string;
}

const ContextMenu: React.FC<Props> = ({ children, hotkey }) => {
  const setIsContextMenuOpen = useSetRecoilState(editorStore.isContextMenuOpen);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [offset, setOffset] = useState<[number, number]>([0, 0]);
  const [layerOffset, setLayerOffset] = useState<[number, number]>([0, 0]);
  const ref = useHotkeys<HTMLDivElement>(hotkey ?? '', onOpen);

  const onContextMenu = useCallback((e) => {
    e.preventDefault();

    setOffset([e.clientX, e.clientY]);
    // @ts-ignore
    setLayerOffset([e.layerX, e.layerY]);

    onOpen();
  }, [onOpen, setOffset, setLayerOffset]);

  useEffect(() => {
    ref.current?.addEventListener('contextmenu', onContextMenu);

    return () => {
      ref.current?.removeEventListener('contextmenu', onContextMenu);
    }
  }, [ref, onContextMenu]);

  useEffect(() => {
    if (isOpen) {
      setIsContextMenuOpen(true);
    } else {
      setTimeout(() => setIsContextMenuOpen(false), 20);
    }
  }, [isOpen, setIsContextMenuOpen]);

  return (
    <>
      <div ref={ref}>{children[0]}</div>
      <ClickAwayListener onClickAway={onClose} mouseEvent="mousedown">
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
