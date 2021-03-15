import { useCallback } from 'react';
import { ChannelType } from '../../../types/Channel';
import useCreateChannel from '../../recoil/channel/useCreateChannel';
import useCreateAudioRegionFromFile from '../../recoil/region/useCreateAudioRegionFromFile';
import useImportMidiFile from "../../fileImport/useImportMidiFile";
import * as Tone from 'tone';

export default function useOnDropTrack() {
  const createChannel = useCreateChannel();
  const createAudioRegion = useCreateAudioRegionFromFile();
  const importMidiFile = useImportMidiFile();

  return useCallback(async (files: File[]) => {
    files.forEach((file, i) => {
      (async () => {
        if (file.type === 'audio/midi') {
          await importMidiFile(file, i);
        } else {
          const channelId = await createChannel(ChannelType.AUDIO, i, file.name.split('.')[0]);
          await createAudioRegion(channelId, file, Tone.Ticks(0), i === 0);
        }
      })();
    });
  }, [createChannel, createAudioRegion, importMidiFile]);
}