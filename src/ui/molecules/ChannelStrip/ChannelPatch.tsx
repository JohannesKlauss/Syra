import React, { useCallback, useMemo, useState } from 'react';
import { SetterOrUpdater } from 'recoil/dist';
import { AvailableSoulPatch } from '../../../recoil/soulPatches';
import { createSoulInstance } from '../../../soul/createSoulInstance';
import {
  Container,
  ListItem, MenuItem,
  Modal,
} from '@material-ui/core';
import { SoulInstance } from '../../../types/Soul';
import DropdownButton from '../../atoms/Buttons/DropdownButton';

interface Props {
  patchList: AvailableSoulPatch[];
  setActivePatch: SetterOrUpdater<SoulInstance | undefined>;
  isInstrument?: boolean;
  activePatch?: SoulInstance;
}

const ChannelPatch: React.FunctionComponent<Props> = React.memo(({patchList, activePatch, setActivePatch, isInstrument, children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangePatch = useCallback(async (UID: string) => {
    const patch = patchList.find(patch => patch.UID === UID);

    if (patch) {
      setActivePatch(await createSoulInstance(patch, isInstrument));
    }
  }, [patchList, setActivePatch, isInstrument]);

  const menuItems = useMemo(() => patchList.map(patch => (
    <MenuItem
      key={patch.UID}
      selected={activePatch?.soulPatch.descriptor.description.UID === patch.UID}
      onClick={async () => await onChangePatch(patch.UID)}
    >
      {patch.displayName}
    </MenuItem>
  )), [onChangePatch, activePatch, patchList]);

  return (
    <>
      {activePatch && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Container>
          {children as JSX.Element}
        </Container>
      </Modal>}
      <ListItem>
        <DropdownButton onClick={() => setIsModalOpen(activePatch !== undefined)} menuItems={menuItems}>
          {activePatch?.soulPatch.descriptor.description.name}
        </DropdownButton>
      </ListItem>
    </>
  );
});

export default ChannelPatch;
