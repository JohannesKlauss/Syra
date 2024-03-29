import React, { useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { regionStore } from '../../recoil/regionStore';
import { channelStore } from '../../recoil/channelStore';
import { ChannelContext } from '../../providers/ChannelContext';
import { RegionContext } from '../../providers/RegionContext';
import DebugNodes from './DebugNodes';
import DebugChannel from './recoil/DebugChannel';
import {
  Box,
  Heading,
  Select,
  Flex,
  Divider,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, Button, Modal
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  showMenu: boolean;
}

function Debugger({onClose, showMenu}: Props) {
  const [selectedChannelId, setSelectedChannelId] = useState('');
  const [selectedRegionId, setSelectedRegionId] = useState('');

  const channelIds = useRecoilValue(channelStore.ids);
  const regionIds = useRecoilValue(regionStore.ids(selectedChannelId));

  const channelCb = useRecoilCallback(({snapshot}) => () => {
    const ids = snapshot.getLoadable(channelStore.ids).contents as string[];

    const obj: {[name: string]: string} = {};

    ids.forEach(id => obj[id] = snapshot.getLoadable(channelStore.name(id)).contents as string);

    return obj;
  }, []);

  const regionCb = useRecoilCallback(({snapshot}) => (channelId: string) => {
    const ids = snapshot.getLoadable(regionStore.ids(channelId)).contents as string[];

    const obj: {[name: string]: string} = {};

    ids.forEach(id => obj[id] = snapshot.getLoadable(regionStore.name(id)).contents as string);

    return obj;
  }, []);

  const channelNames = channelCb();
  regionCb(selectedChannelId);

  const selectedId = useRecoilValue(channelStore.selectedId);

  useEffect(() => {
    setSelectedChannelId(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (selectedRegionId === '' && regionIds.length > 0) {
      setSelectedRegionId(regionIds[0]);
    }
  }, [selectedChannelId, regionIds, selectedRegionId]);

  return (
    <Modal isOpen={showMenu} onClose={onClose} size={'6xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Debugger</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={4}>
            <Heading size={'lg'}>Debugger</Heading>
            <Heading size={'sm'} mb={8}>
              NOTE: This will alter a lot of the core functionality. Using this debugger will
              likely create a need to reload the project before it's usable with the normal UI again.
            </Heading>

            <ChannelContext.Provider value={selectedChannelId}>
              <Flex align={'center'} justify={'flex-start'}>
                <Heading size={'sm'} mr={4}>Select Channel:</Heading>
                <Select flex={1} placeholder="Select Channel" value={selectedChannelId} onChange={e => {
                  setSelectedChannelId(e.target.value as string);
                  setSelectedRegionId('');
                }}>
                  {channelIds.map(id => <option value={id} key={id}>{channelNames[id]}</option>)}
                </Select>
              </Flex>

              <DebugChannel/>

              <Divider my={8}/>

              <RegionContext.Provider value={selectedRegionId}>
                <Flex align={'center'} justify={'flex-start'}>
                  <Heading size={'sm'} mr={4}>Select Region:</Heading>
                  <Select flex={1} placeholder="Select Region" value={selectedRegionId} onChange={e => {
                    setSelectedRegionId(e.target.value as string);
                  }}>
                    {regionIds.map(id => <option value={id} key={id}>{id}</option>)}
                  </Select>
                </Flex>

                {selectedRegionId !== '' && <DebugNodes/>}
              </RegionContext.Provider>
            </ChannelContext.Provider>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Debugger;
