import { useRecoilValue } from 'recoil';
import { useContext } from 'react';
import { audioBufferStore } from '../../recoil/audioBufferStore';
import * as Tone from 'tone';
import { ViewContext } from '../../providers/ViewContext';
import { gridStore } from '../../recoil/gridStore';

export default function usePeakWaveformAnalyzer(bufferId: string) {
  const peakWaveform = useRecoilValue(audioBufferStore.peakWaveform(bufferId));
  const { view } = useContext(ViewContext);
  const ticksPerPixel = useRecoilValue(gridStore.ticksPerPixel(view));

  const wavePixelPerTick = (peakWaveform?.pixels_per_second || 1) / Tone.Ticks(1, 's').toTicks();
  const waveTicksPerPixel = 1 / wavePixelPerTick;

  const correlation = waveTicksPerPixel / ticksPerPixel;

  console.log('waveform', peakWaveform);
  console.log('waveTicksPerPixel', waveTicksPerPixel);
  console.log('ticksPerPixel', ticksPerPixel);
  console.log('correlation', correlation);

  return {
    peakWaveform,
    correlation,
  };
}
