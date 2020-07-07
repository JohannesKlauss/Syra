import React, { useCallback, useRef, useState } from 'react';
import { SetterOrUpdater } from 'recoil/dist';
import { AvailableSoulPatch } from '../recoil/atoms/soulPatches';
import { createSoulInstance } from '../soul/createSoulInstance';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Container,
  Grow,
  ListItem, MenuItem, MenuList,
  Modal,
  Paper,
  Popper,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SoulInstance } from '../types/SoulInstance';

interface Props {
  patchList: AvailableSoulPatch[];
  setActivePatch: SetterOrUpdater<SoulInstance | undefined>;
  isInstrument?: boolean;
  activePatch?: SoulInstance;
}

const ChannelPatch: React.FunctionComponent<Props> = ({patchList, activePatch, setActivePatch, isInstrument, children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const onChangePatch = useCallback(async (UID: string) => {
    const patch = patchList.find(patch => patch.UID === UID);

    if (patch) {
      setActivePatch(await createSoulInstance(patch, isInstrument));
    }
  }, [patchList, setActivePatch]);

  return (
    <>
      {activePatch && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Container>
          {children as JSX.Element}
        </Container>
      </Modal>}
      <ListItem>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} size={'small'}>
          <Button onClick={() => setIsModalOpen(activePatch !== undefined)} size={'small'}>
            {activePatch?.soulPatch.descriptor.description.name}
          </Button>
          <Button color="primary" size="small" onClick={() => setIsMenuOpen(prev => !prev)}>
            <ArrowDropDownIcon/>
          </Button>
        </ButtonGroup>
        <Popper open={isMenuOpen} anchorEl={anchorRef.current} transition disablePortal style={{zIndex: 2}}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
                  <MenuList id="split-button-menu">
                    {patchList.map(patch => (
                      <MenuItem
                        key={patch.UID}
                        selected={activePatch?.soulPatch.descriptor.description.UID === patch.UID}
                        onClick={async () => {
                          await onChangePatch(patch.UID);

                          setIsMenuOpen(false);
                        }}
                      >
                        {patch.displayName}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ListItem>
    </>
  );
}

export default ChannelPatch;
