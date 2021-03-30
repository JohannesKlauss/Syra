import { useRecoilValue } from 'recoil';
import { useContext, useEffect, useState } from "react";
import { audioBufferStore } from '../../recoil/audioBufferStore';
import * as Tone from 'tone';
import { ViewContext } from '../../providers/ViewContext';
import { gridStore } from '../../recoil/gridStore';
import { projectStore } from "../../recoil/projectStore";
import { transportStore } from "../../recoil/transportStore";

export default function usePeakWaveformAnalyzer(bufferId: string) {
  const peakWaveform = useRecoilValue(audioBufferStore.peakWaveform(bufferId));
  const { view } = useContext(ViewContext);
  const ticksPerPixel = useRecoilValue(gridStore.ticksPerPixel(view));
  const currentTempo = useRecoilValue(transportStore.currentTempo);
  const [correlation, setCorrelation] = useState(1);

  useEffect(() => {
    const wavePixelPerTick = (peakWaveform?.pixels_per_second || 1) / Tone.Ticks(1, 's').toTicks();
    const waveTicksPerPixel = 1 / wavePixelPerTick;

    setCorrelation(waveTicksPerPixel / ticksPerPixel);
  }, [currentTempo, peakWaveform, setCorrelation, ticksPerPixel]);

  return {
    peakWaveform,
    correlation,
  };
}
