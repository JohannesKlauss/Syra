import { useEffect } from 'react';
import * as Tone from 'tone';

export default function useTonePatcher(plugins: [AudioWorkletNode | null], instrument?: AudioWorkletNode | null) {
  useEffect(() => {
    const activePlugins = plugins.filter(plugin => plugin !== null) as [AudioWorkletNode];

    if (instrument) {
      Tone.disconnect(instrument);
      Tone.connectSeries(instrument, ...activePlugins, Tone.Destination);
    }
    else if(activePlugins.length > 0) {
      Tone.connectSeries(...activePlugins, Tone.Destination);
    }

    return () => {
      if (instrument) {
        Tone.disconnect(instrument);
      }
    };
  }, [plugins, instrument]);
}