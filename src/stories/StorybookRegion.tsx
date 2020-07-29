import React, { useEffect } from 'react';
import { RegionState, regionStore } from '../recoil/regionStore';
import { useSetRecoilState } from 'recoil/dist';
import { ChannelContext } from '../providers/ChannelContext';
import { RegionContext } from '../providers/RegionContext';
import { audioBufferStore } from '../recoil/audioBufferStore';
import useAudioContext from '../hooks/audio/useAudioContext';
import { encodeB64ToArrayBuffer } from '../utils/binary';
import * as Tone from 'tone';

interface Props extends RegionState {
  files: string[];
}

const C_ID = 'channel-MOCK';
const R_ID = 'region-MOCK';
const A_ID = 'buffer-MOCK';

const StorybookRegion: React.FC<Props> = ({children, ...props}) => {
  const {start, trimEnd, trimStart, isRecording, isMuted, isSolo, end, files} = props;

  const ctx = useAudioContext();

  const setStart = useSetRecoilState(regionStore.start(R_ID));
  const setEnd = useSetRecoilState(regionStore.end(R_ID));
  const setTrimStart = useSetRecoilState(regionStore.trimStart(R_ID));
  const setTrimEnd = useSetRecoilState(regionStore.trimEnd(R_ID));
  const setIsSolo = useSetRecoilState(regionStore.isSolo(R_ID));
  const setIsRecording = useSetRecoilState(regionStore.isRecording(R_ID));
  const setIsMuted = useSetRecoilState(regionStore.isMuted(R_ID));
  const setAudioBufferPointer = useSetRecoilState(regionStore.audioBufferPointer(R_ID));
  const setAudioBuffer = useSetRecoilState(audioBufferStore.buffer(A_ID));

  useEffect(() => {
    setAudioBufferPointer(A_ID);
    setStart(start);
    setEnd(end);
    setTrimStart(trimStart);
    setTrimEnd(trimEnd);
    setIsSolo(isSolo);
    setIsMuted(isMuted);
    setIsRecording(isRecording);

    (async () => {
      const arrayBuffer = encodeB64ToArrayBuffer(files[0].split(',')[1]);
      const toneBuffer = await new Tone.Buffer(await ctx.decodeAudioData(arrayBuffer));

      setAudioBuffer(toneBuffer);
    })();
  }, [start, trimEnd, trimStart, isRecording, isMuted, isSolo, end, files]);

  return (
    <ChannelContext.Provider value={C_ID}>
      <RegionContext.Provider value={R_ID}>
        {children}
      </RegionContext.Provider>
    </ChannelContext.Provider>
  );
};

export default StorybookRegion;
