import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import ParameterList from './Parameters/ParameterList';
import { channelStore } from '../../../recoil/channelStore';
import { soulPatchesStore } from '../../../recoil/soulPatchesStore';
import { Button, Container, MenuItem, Modal, styled, Typography } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import { createSoulInstance } from '../../../soul/createSoulInstance';

const PowerButton = styled(Button)({
  maxWidth: 28,
  minWidth: 28,
});

const PowerIcon = styled(PowerSettingsNewIcon)({
  width: 18,
  height: 18,
})

interface Props {
  id: string;
  isInstrument?: boolean;
}

function SoulPlugin({id, isInstrument}: Props) {
  const [activePlugin, setActivePlugin] = useRecoilState( channelStore.soulInstance(id));
  const [isPluginActive, setIsPluginActive] = useRecoilState(channelStore.isPluginActive(id));
  const patchList = useRecoilValue(isInstrument ? soulPatchesStore.availableSoulInstruments : soulPatchesStore.availableSoulPlugins);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangePatch = useCallback(async (UID: string) => {
    const patch = patchList.find(patch => patch.UID === UID);

    if (patch) {
      setActivePlugin(await createSoulInstance(patch, isInstrument));
    }
  }, [patchList, setActivePlugin, isInstrument]);

  const menuItems = useMemo(() => patchList.map(patch => (
    <MenuItem
      key={patch.UID}
      selected={activePlugin?.soulPatch.descriptor.description.UID === patch.UID}
      onClick={async () => await onChangePatch(patch.UID)}
    >
      {patch.displayName}
    </MenuItem>
  )), [onChangePatch, activePlugin, patchList]);

  const BypassButton = useMemo(() => (
    <PowerButton onClick={() => setIsPluginActive(currVal => !currVal)}>
      <PowerIcon width={20} height={20}/>
    </PowerButton>
  ), [setIsPluginActive]);

  return (
    <>
      {activePlugin && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Container>
          <ParameterList soulInstanceId={id} parameter={activePlugin.soulPatch.descriptor.parameters}/>
        </Container>
      </Modal>}
      <DropdownButton
        onClick={() => setIsModalOpen(activePlugin !== undefined)}
        menuItems={menuItems}
        color={isPluginActive ? 'primary' : 'default'}
        fullWidth
        small
        menuPlacement={'right-start'}
        prependingButton={BypassButton}
      >
        <Typography variant="overline" noWrap>{activePlugin?.soulPatch.descriptor.description.name}</Typography>
      </DropdownButton>
    </>
  );
}

export default SoulPlugin;
