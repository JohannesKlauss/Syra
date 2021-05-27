import { audioBufferStore } from '../../recoil/audioBufferStore';
import { useRecoilValue } from 'recoil';
import usePeakWaveformAnalyzer from './usePeakWaveformAnalyzer';
import { useCallback, useMemo } from "react";
import { determineTextColor } from "../../utils/color";
import { transportStore } from "../../recoil/transportStore";
import * as Tone from 'tone';
import useTicksToPixel from "../ui/useTicksToPixel";

const scaleY = (amplitude: number, height: number) => {
  const range = 256;
  const offset = 128;

  return height - ((amplitude + offset) * height) / range;
};

export default function usePeakWaveformImageGenerator(bufferId: string) {
  const { peakWaveform, correlation } = usePeakWaveformAnalyzer(bufferId);

  const buffer = useRecoilValue(audioBufferStore.buffer(bufferId));
  const currentTempo = useRecoilValue(transportStore.currentTempo);
  const ticksToPixel = useTicksToPixel();

  const width = useMemo(() => ticksToPixel(Tone.Ticks(buffer?.duration ?? 0, 's').toTicks()), [currentTempo, buffer, ticksToPixel]);

  return useCallback(async (height: number, color: string) => {
    const t = performance.now();

    if (width < 1 || height < 1) {
      return null;
    }

    const canvas = new OffscreenCanvas(width, height);

    const instance = canvas.getContext('2d');

    if (!instance || !peakWaveform) {
      return null;
    }

    instance.fillStyle = determineTextColor(color, true);
    instance.beginPath();

    const channel = peakWaveform.channel(0);

    // Loop forwards, drawing the upper half of the waveform
    for (let x = 0; x < peakWaveform.length; x++) {
      const val = channel.max_sample(x);

      instance.lineTo(x * correlation + 0.5, scaleY(val, height) + 0.5);
    }

    // Loop backwards, drawing the lower half of the waveform
    for (let x = peakWaveform.length - 1; x >= 0; x--) {
      const val = channel.min_sample(x);

      instance.lineTo(x * correlation + 0.5, scaleY(val, height) + 0.5);
    }

    instance.closePath();
    instance.stroke();
    instance.fill();

    const imageUrl = URL.createObjectURL(await canvas.convertToBlob());

    return imageUrl;
  }, [peakWaveform, correlation, width]);
}
