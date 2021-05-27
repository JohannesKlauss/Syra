import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from "react";
import MidiSettings from "./MidiSettings";
import { editorStore } from "../../../../recoil/editorStore";
import { useRecoilState } from "recoil";
import AudioSettings from "./AudioSettings";

const Settings: React.FC = () => {
  const [showSettings, setShowSettings] = useRecoilState(editorStore.showSettings);

  return (
    <Modal isOpen={showSettings} onClose={() => setShowSettings(false)} size={'2xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <React.Suspense fallback={'loading...'}>
            <Tabs variant="soft-rounded" isFitted colorScheme="teal">
              <TabList>
                <Tab>MIDI</Tab>
                <Tab>Audio</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <MidiSettings/>
                </TabPanel>
                <TabPanel>
                  <AudioSettings/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </React.Suspense>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
