import { useRecoilCallback } from 'recoil';
import { createNewId } from '../../../utils/createNewId';
import { BUFFER_ID_PREFIX, REGION_ID_PREFIX } from '../../../const/ids';
import useAudioContext from '../../audio/useAudioContext';
import { regionStore } from '../../../recoil/regionStore';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import { analyze } from 'web-audio-beat-detector';
import * as Tone from 'tone';
import useUploadAudioFile from '../../audio/useUploadAudioFile';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelMode } from '../../../types/Channel';
import useSyraEngine from '../../engine/useSyraEngine';
import useShowAnalyzedTempoToast from "../../ui/toasts/useShowAnalyzedTempoToast";

export default function useCreateAudioRegionFromFile() {
  const audioContext = useAudioContext();
  const uploadFile = useUploadAudioFile();
  const engine = useSyraEngine();
  const showToast = useShowAnalyzedTempoToast();

  return useRecoilCallback(
    ({ set, snapshot }) => async (
      channelId: string,
      file: File,
      start: Tone.TimeClass = Tone.Ticks(0),
      analyzeTempo: boolean = false,
      regionId?: string,
    ) => {
      const newRegionId = regionId ?? createNewId(REGION_ID_PREFIX);
      const newBufferId = createNewId(BUFFER_ID_PREFIX);

      const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());

      const channelMode = snapshot.getLoadable(channelStore.mode(channelId)).getValue();
      const staticCounter = snapshot.getLoadable(regionStore.staticCounter(channelId)).contents as number;

      if (audioBuffer.duration > 0) {
        set(audioBufferStore.ids, (currVal) => [...currVal, newBufferId]);
        set(audioBufferStore.buffer(newBufferId), audioBuffer);
        set(audioBufferStore.name(newBufferId), file.name);

        set(regionStore.ids(channelId), (currVal) => [...currVal, newRegionId]);
        set(regionStore.audioBufferPointer(newRegionId), newBufferId);
        set(regionStore.start(newRegionId), start.toTicks());
        set(regionStore.offset(newRegionId), 0);
        set(regionStore.duration(newRegionId), Tone.Ticks(audioBuffer.duration, 's').toTicks());
        set(regionStore.isMidi(newRegionId), false);
        set(regionStore.name(newRegionId), `${file.name.replace(/\.[^/.]+$/, '')}#${staticCounter}`);

        set(regionStore.staticCounter(channelId), staticCounter + 1);

        if (audioBuffer.numberOfChannels === 2 && channelMode === ChannelMode.MONO) {
          set(channelStore.mode(channelId), ChannelMode.STEREO);

          if (engine.channels.getChannel(channelId)) {
            engine.channels.getChannel(channelId)!.channelMode = ChannelMode.STEREO;
          }
        }

        uploadFile(newBufferId, file);

        if (analyzeTempo) {
          let analyzedTempo: number | null = null;

          try {
            analyzedTempo = await analyze(audioBuffer);
          } catch (e) {}

          if (analyzedTempo) {
            // Trim the analyzed tempo to two decimal points.
            analyzedTempo = Math.round(analyzedTempo * 100) / 100;

            showToast(analyzedTempo);
          }
        }
      } else {
        // TODO: ERROR DURING DECODING
      }

      return newRegionId;
    },
    [audioContext, engine, showToast],
  );
}