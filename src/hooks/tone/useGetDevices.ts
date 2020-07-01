import * as Tone from 'tone';
import { useEffect, useRef } from 'react';
import useAsync from '../core/useAsync';

export default function useGetDevices() {
  const devices = useRef<MediaDeviceInfo[]>([]);

  useEffect(() => {
    Tone.UserMedia.enumerateDevices().then(devs => devices.current = devs);
  }, []);

  // useAsync(async () => devices.current = await Tone.UserMedia.enumerateDevices());

  return devices.current;
}