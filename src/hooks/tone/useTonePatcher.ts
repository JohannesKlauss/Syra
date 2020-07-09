import { useEffect, useState } from 'react';
import * as Tone from 'tone';
import { SoulInstance } from '../../types/Soul';

const channel = new Tone.Channel(0, 0);

export default function useTonePatcher(plugins: SoulInstance[], instrument?: SoulInstance) {
  const [toneChannelRef] = useState(channel);

  useEffect(() => {
    const pluginNodes = plugins.map(plugin => plugin.audioNode);

    if (instrument) {
      Tone.disconnect(instrument.audioNode);
      Tone.connectSeries(instrument.audioNode, ...pluginNodes, channel, Tone.Destination);
    }
    else if(plugins.length > 0) {
      // TODO: WHEN DEALING WITH AUDIO WE PROBABLY NEED A SOURCE AS A AUDIO NODE INSTEAD OF A INSTRUMENT
      Tone.disconnect(pluginNodes[0]);
      Tone.connectSeries(...pluginNodes, channel, Tone.Destination);
    }

    return () => {
      if (instrument) {
        Tone.disconnect(instrument.audioNode);
      }
      else if(plugins.length > 0) {
        Tone.disconnect(pluginNodes[0]);
      }
    };
  }, [plugins, instrument]);

  return toneChannelRef;
}