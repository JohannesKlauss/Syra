import React, { useCallback, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ParameterList from './Parameters/ParameterList';
import { channelStore } from '../../../recoil/channelStore';
import { soulPluginStore } from '../../../recoil/soulPluginStore';
import DropdownButton from '../../atoms/Buttons/DropdownButton';
import { createSoulInstance } from '../../../soul/createSoulInstance';
import { Box, IconButton, Modal } from '@chakra-ui/react';
import { IoIosPower } from 'react-icons/io';

interface Props {
  id: string;
  isInstrument?: boolean;
}

function SoulPlugin({ id, isInstrument }: Props) {
  const [activePlugin, setActivePlugin] = useRecoilState(channelStore.soulInstance(id));
  const [isPluginActive, setIsPluginActive] = useRecoilState(channelStore.isPluginActive(id));
  const patchList = useRecoilValue(
    isInstrument ? soulPluginStore.availableSoulInstruments : soulPluginStore.availableSoulPlugins,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangePatch = useCallback(
    async (UID: string) => {
      const patch = patchList.find((patch) => patch.UID === UID);

      if (patch) {
        setActivePlugin(await createSoulInstance(patch, isInstrument));
      }
    },
    [patchList, setActivePlugin, isInstrument],
  );

  const menuItems = useMemo(
    () =>
      patchList.map((patch) => ({
        label: patch.displayName,
        onClick: async () => await onChangePatch(patch.UID),
      })),
    [onChangePatch, patchList],
  );

  const BypassButton = useMemo(
    () => (
      <IconButton
        icon={<IoIosPower />}
        size={'xs'}
        aria-label={`Bypass Plugin`}
        onClick={() => setIsPluginActive((currVal) => !currVal)}
      />
    ),
    [setIsPluginActive],
  );

  return (
    <div>
      {activePlugin && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Box p={24}>
            <ParameterList soulInstanceId={id} parameter={activePlugin.soulPatch.descriptor.parameters} />
          </Box>
        </Modal>
      )}
      <DropdownButton
        onClick={() => setIsModalOpen(activePlugin !== undefined)}
        menuItems={menuItems}
        color={isPluginActive ? 'teal' : 'gray'}
        size={'xs'}
        label={activePlugin?.soulPatch.descriptor.description.name ?? '-'}
      >
      </DropdownButton>
    </div>
  );
}

export default SoulPlugin;
