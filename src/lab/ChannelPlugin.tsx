import React, { useCallback, useContext, useRef, useState } from 'react';
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
import { ChannelContext } from '../providers/ChannelContext';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { channelPluginByIndex } from '../recoil/selectors/channel';
import { availableSoulPlugins } from '../recoil/atoms/soulPatches';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import { createSoulInstance } from '../soul/createSoulInstance';

interface Props {
  index: number;
}

function ChannelPlugin({index}: Props) {
  const channelId = useContext(ChannelContext);
  const [activePlugin, setActivePlugin] = useRecoilState(channelPluginByIndex({channelId, index}));
  const availablePlugins = useRecoilValue(availableSoulPlugins);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  console.log('index', 1);

  const onChangePlugin = useCallback(async (UID: string) => {
    const plugin = availablePlugins.find(instrument => instrument.UID === UID);

    if (plugin) {
      setActivePlugin(await createSoulInstance(plugin));
    }
  }, [availablePlugins, setActivePlugin]);

  return (
    <>
      {activePlugin && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Container>
          <ParameterList parameters={activePlugin.soulPatch.descriptor.parameters} port={activePlugin.audioNode.port}/>
        </Container>
      </Modal>}
      <ListItem>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} size={'small'}>
          <Button onClick={() => setIsModalOpen(activePlugin !== undefined)} size={'small'}>
            {activePlugin?.soulPatch.descriptor.description.name}
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
                    {availablePlugins.map(plugin => (
                      <MenuItem
                        key={plugin.UID}
                        selected={activePlugin?.soulPatch.descriptor.description.UID === plugin.UID}
                        onClick={async () => {
                          await onChangePlugin(plugin.UID);

                          setIsMenuOpen(false);
                        }}
                      >
                        {plugin.displayName}
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

export default ChannelPlugin;
