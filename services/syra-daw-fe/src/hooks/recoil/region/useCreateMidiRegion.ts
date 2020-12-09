import { useRecoilCallback } from 'recoil';
import { createNewId } from '../../../utils/createNewId';
import { REGION_ID_PREFIX } from '../../../const/ids';
import { regionStore } from '../../../recoil/regionStore';
import { Note } from "@tonejs/midi/dist/Note";

export type CreateMidiRegionParams = {
  channelId: string;
  channelName: string;
  file: File;
  notes: Note[];
  start: number;
  duration: number;
  regionId?: string;
}

export default function useCreateMidiRegion() {
  return useRecoilCallback(
    ({ set, snapshot }) => async (params: CreateMidiRegionParams) => {
      const newRegionId = params.regionId ?? createNewId(REGION_ID_PREFIX);
      const staticCounter = snapshot.getLoadable(regionStore.staticCounter(params.channelId)).contents as number;

      set(regionStore.ids(params.channelId), (currVal) => [...currVal, newRegionId]);
      set(regionStore.start(newRegionId), params.start);
      set(regionStore.trimEnd(newRegionId), params.duration);
      set(regionStore.name(newRegionId), `${params.channelName} #${staticCounter}`);
      set(regionStore.isMidi(newRegionId), true);
      set(regionStore.midiNotes(newRegionId), params.notes);

      set(regionStore.staticCounter(params.channelId), staticCounter + 1);

      return newRegionId;
    },
    [],
  );
}