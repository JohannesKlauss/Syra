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

interface Props {

}

const Settings: React.FC<Props> = ({}) => {
  const [showSettings, setShowSettings] = useRecoilState(editorStore.showSettings);

  return (
    <Modal isOpen={showSettings} onClose={() => setShowSettings(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="soft-rounded" isFitted colorScheme="teal">
            <TabList>
              <Tab>MIDI</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <MidiSettings/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
