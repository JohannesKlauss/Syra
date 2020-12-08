import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ParameterList from './Parameters/ParameterList';
import { channelStore } from '../../../recoil/channelStore';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import PluginButton from '../../atoms/Buttons/PluginButton';

interface Props {
  id: string;
  isInstrument?: boolean;
}

function SoulPlugin({ id, isInstrument }: Props) {
  const [activePlugin] = useRecoilState(channelStore.soulInstance(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {activePlugin && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{activePlugin.soulPatch.descriptor.description.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ParameterList soulInstanceId={id} parameter={activePlugin.soulPatch.descriptor.parameters} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <PluginButton onClick={() => setIsModalOpen(true)} pluginId={id} isInstrument={isInstrument} />
    </>
  );
}

export default SoulPlugin;
