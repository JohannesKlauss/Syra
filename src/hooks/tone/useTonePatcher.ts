import { useEffect } from 'react';
import * as Tone from 'tone';
import { SoulInstance } from '../../types/SoulInstance';

export default function useTonePatcher(plugins: SoulInstance[], instrument?: SoulInstance) {
  useEffect(() => {
    const pluginNodes = plugins.map(plugin => plugin.audioNode);

    if (instrument) {
      Tone.disconnect(instrument.audioNode);
      Tone.connectSeries(instrument.audioNode, ...pluginNodes, Tone.Destination);
    }
    else if(plugins.length > 0) {
      // TODO: WHEN DEALING WITH AUDIO WE PROBABLY NEED A SOURCE AS A AUDIO NODE INSTEAD OF A INSTRUMENT
      Tone.connectSeries(...pluginNodes, Tone.Destination);
    }

    return () => {
      if (instrument) {
        Tone.disconnect(instrument.audioNode);
      }
    };
  }, [plugins, instrument]);
}