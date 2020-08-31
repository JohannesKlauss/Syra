import { useEffect, useRef } from 'react';

export default function useSharedAudioBufferMemory(byteLength: number) {
  const channelLeftSab = useRef(new SharedArrayBuffer(byteLength));
  const channelRightSab = useRef(new SharedArrayBuffer(byteLength));

  useEffect(() => {
    channelLeftSab.current = new SharedArrayBuffer(byteLength);
    channelRightSab.current = new SharedArrayBuffer(byteLength);
  }, [byteLength, channelRightSab, channelLeftSab]);

  return { channelLeftSab: channelLeftSab.current, channelRightSab: channelRightSab.current };
}