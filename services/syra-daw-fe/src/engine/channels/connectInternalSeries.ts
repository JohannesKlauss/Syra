import { ChannelMode } from "../../types/Channel";
import * as Tone from "tone";
import { isAnyAudioNode } from "standardized-audio-context";

export function connectInternalSeries(channelMode: ChannelMode, ...nodes: Tone.InputNode[]) {
  const first = nodes.shift();
  nodes.reduce((prev, current) => {
    console.log('prev', prev);
    console.log('current', current);

    if (prev instanceof Tone.ToneAudioNode) {
      prev.connect(current, 0, 0);

      if (channelMode === ChannelMode.STEREO && prev.channelCount >= 2 && "channelCount" in current && current.channelCount >= 2) {
        prev.connect(current, 1, 1)
      }
    } else if (isAnyAudioNode(prev)) {
      Tone.connect(prev, current, 0, 0);

      if (channelMode === ChannelMode.STEREO && prev.channelCount >= 2 && "channelCount" in current && current.channelCount >= 2) {
        Tone.connect(prev, current, 1, 1);
      }
    }

    return current;
  }, first);
}