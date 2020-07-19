import React, { useCallback, useMemo, useState } from 'react';
import { SetterOrUpdater } from 'recoil/dist';
import { AvailableSoulPatch } from '../../../recoil/soulPatchesStore';
import { createSoulInstance } from '../../../soul/createSoulInstance';
import {
  Button,
  Container, IconButton,
  ListItem, MenuItem,
  Modal, Typography,
} from '@material-ui/core';
import { SoulInstance } from '../../../types/Soul';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import { makeStyles } from '@material-ui/core/styles';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles({
  listItem: {
    padding: '1px 3px',
  },
});

interface Props {
  patchList: AvailableSoulPatch[];
  setActivePatch: SetterOrUpdater<SoulInstance | undefined>;
  isInstrument?: boolean;
  activePatch?: SoulInstance;
}

const ChannelPatch: React.FunctionComponent<Props> = React.memo(({ patchList, activePatch, setActivePatch, isInstrument, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const styles = useStyles();

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

  const BypassButton = useMemo(() => (
    <Button onClick={() => null}>
      <PowerSettingsNewIcon />
    </Button>
  ), []);

  return (
    <>
      {activePatch && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Container>
          {children as JSX.Element}
        </Container>
      </Modal>}
      <ListItem className={styles.listItem}>
        <DropdownButton
          onClick={() => setIsModalOpen(activePatch !== undefined)}
          menuItems={menuItems}
          fullWidth
          small
          menuPlacement={'right-start'}
          prependingButton={BypassButton}
        >
          <Typography variant="overline" noWrap>{activePatch?.soulPatch.descriptor.description.name}</Typography>
        </DropdownButton>
      </ListItem>
    </>
  );
});

export default ChannelPatch;
