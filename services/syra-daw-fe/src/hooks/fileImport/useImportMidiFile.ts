import useCreateChannel from "../recoil/channel/useCreateChannel";
import useCreateMidiRegion from "../recoil/region/useCreateMidiRegion";
import { ChannelType } from "../../types/Channel";
import { Midi } from "@tonejs/midi";
import useSetInstrument from "../recoil/channel/useSetInstrument";
import { useCallback } from "react";

export default function useImportMidiFile() {
  const createChannel = useCreateChannel();
  const createMidiRegion = useCreateMidiRegion();
  const setInstrument = useSetInstrument();

  return useCallback(async (file: File, importIndex: number, start: number = 0) => {
    const midi = new Midi(await file.arrayBuffer());

    for (const track of midi.tracks) {
      const channelName = midi.tracks.length > 1 ? `${file.name.split('.')[0] } - ${track.instrument.name}` : file.name.split('.')[0];
      const channelId = await createChannel(ChannelType.INSTRUMENT, importIndex, channelName);

      await setInstrument(channelId, 'com.yourcompany.ElectroPiano');

      await createMidiRegion({
        channelId,
        channelName,
        file,
        notes: track.notes,
        start,
        duration: midi.duration,
      });
    }
  }, [createChannel, createMidiRegion]);
}