import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { audioRoutingStore } from "../../../../recoil/audioRoutingStore";
import { useRecoilState } from "recoil";

interface Props {

}

const AudioSettings: React.FC<Props> = () => {
  const [activeInputDeviceId, setActiveInputDeviceId] = useRecoilState(audioRoutingStore.activeInputDeviceId);
  const [activeOutputDeviceId, setActiveOutputDeviceId] = useRecoilState(audioRoutingStore.activeOutputDeviceId);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    navigator.mediaDevices.ondevicechange = e => {
      console.log('event', e);
    };

    (async () => {
      setDevices(await navigator.mediaDevices.enumerateDevices());
    })();
  }, []);

  return (
    <>
      <FormControl marginY={4}>
        <FormLabel>Audio Input</FormLabel>
        <Select placeholder="Select Audio Device" value={activeInputDeviceId} onChange={e => setActiveInputDeviceId(e.target.value)}>
          {devices.filter(device => device.kind === 'audioinput').map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl marginY={4}>
        <FormLabel>Audio Output</FormLabel>
        <Select placeholder="Select Audio Device" value={activeOutputDeviceId} onChange={e => setActiveOutputDeviceId(e.target.value)}>
          {devices.filter(device => device.kind === 'audiooutput').map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default AudioSettings;
