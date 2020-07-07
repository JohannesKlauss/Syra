import React, { useCallback, useContext, useRef, useState } from 'react';
import { ChannelContext } from '../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import {
  Button,
  ButtonGroup,
  ClickAwayListener, Container,
  Grow,
  ListItem,
  MenuItem,
  MenuList, Modal,
  Paper,
  Popper,
} from '@material-ui/core';
import { selectedChannelInstrument } from '../recoil/selectors/channel';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { availableSoulInstruments } from '../recoil/atoms/soulPatches';
import { createSoulInstance } from '../soul/createSoulInstance';
import SoulInstrument from './SoulInstrument';
import useSendMidiToSoul from '../hooks/soul/useSendMidiToSoul';

function ChannelInstrument() {
  const channelId = useContext(ChannelContext);
  const [activeInstrument, setActiveInstrument] = useRecoilState(selectedChannelInstrument(channelId));
  const availableInstruments = useRecoilValue(availableSoulInstruments);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const onNote = useSendMidiToSoul(activeInstrument);

  const onChangeInstrument = useCallback(async (UID: string) => {
    const instrument = availableInstruments.find(instrument => instrument.UID === UID);

    if (instrument) {
      setActiveInstrument(await createSoulInstance(instrument, true));
    }
  }, [setActiveInstrument, availableInstruments]);

  return (
    <>
      {activeInstrument && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Container>
          <SoulInstrument patch={activeInstrument.soulPatch} port={activeInstrument.audioNode.port} onNote={onNote}/>
        </Container>
      </Modal>}
      <ListItem>
      <ButtonGroup variant="contained" color="primary" ref={anchorRef} size={'small'}>
        <Button onClick={() => setIsModalOpen(activeInstrument !== undefined)} size={'small'}>
          {activeInstrument?.soulPatch.descriptor.description.name}
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
                  {availableInstruments.map(inst => (
                    <MenuItem
                      key={inst.UID}
                      selected={activeInstrument?.soulPatch.descriptor.description.UID === inst.UID}
                      onClick={async () => {
                        await onChangeInstrument(inst.UID);

                        setIsMenuOpen(false);
                      }}
                    >
                      {inst.displayName}
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

export default React.memo(ChannelInstrument);
