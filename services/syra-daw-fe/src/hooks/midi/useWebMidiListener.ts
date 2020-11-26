import { useSetRecoilState } from "recoil";
import { keyboardMidiStore } from "../../recoil/keyboardMidiStore";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import WebMidi from "webmidi";

export default function useWebMidiListener() {
  const setMidiDevice = useSetRecoilState(keyboardMidiStore.selectedMidiDevice);
  const setIsMidiEnabled = useSetRecoilState(keyboardMidiStore.isMidiEnabled);
  const toast = useToast();

  const showToast = (description: string) => {
    toast({
      title: "Updated MIDI I/O.",
      description,
      status: "info",
      duration: 9000,
      isClosable: true,
    })
  };

  useEffect(() => {
    WebMidi.enable(function(error) {
      if (error === undefined) {
        setIsMidiEnabled(true);

        showToast(`Detected ${WebMidi.inputs.length} MIDI inputs and ${WebMidi.outputs.length} outputs.`)
      } else {
        setIsMidiEnabled(false);

        showToast(`Could not enable Web MIDI.`);
      }

      if (WebMidi.inputs.length > 0) {
        setMidiDevice(WebMidi.inputs[0].name);
      }
    });
  });
}