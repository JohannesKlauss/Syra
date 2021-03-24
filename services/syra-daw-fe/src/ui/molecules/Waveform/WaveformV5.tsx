import React, { useContext } from "react";
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';
import { colorToHexNumber, determineTextColor } from '../../../utils/color';
import usePeakWaveformAnalyzer from '../../../hooks/audio/usePeakWaveformAnalyzer';
import WaveformData from 'waveform-data';
import { RegionContext } from "../../../providers/RegionContext";
import useTicksToPixel from "../../../hooks/tone/useTicksToPixel";
import { regionStore } from "../../../recoil/regionStore";
import { useRecoilValue } from "recoil";

const scaleY = (amplitude: number, height: number) => {
  const range = 256;
  const offset = 128;

  return height - ((amplitude + offset) * height) / range;
};

interface PixiProps {
  height: number;
  color: string;
  correlation: number; // Correlation of pixel density inside the waveform and the grid
  offset: number;
  waveform: WaveformData;
}

const Waveform = PixiComponent<PixiProps, Graphics>('Waveform', {
  create: () => new Graphics(),
  applyProps: (instance, _, props) => {
    const { height, color, offset, correlation, waveform } = props;

    console.log('offset', offset);

    instance.clear();
    instance.position.set(-offset, 0);
    instance.beginFill(colorToHexNumber(determineTextColor(color, true)));

    const channel = waveform.channel(0);

    // Loop forwards, drawing the upper half of the waveform
    for (let x = 0; x < waveform.length; x++) {
      const val = channel.max_sample(x);

      instance.lineTo(x * correlation + 0.5, scaleY(val, height) + 0.5);
    }

    // Loop backwards, drawing the lower half of the waveform
    for (let x = waveform.length - 1; x >= 0; x--) {
      const val = channel.min_sample(x);

      instance.lineTo(x * correlation + 0.5, scaleY(val, height) + 0.5);
    }

    instance.closePath();
    instance.endFill();
  },
});

interface Props {
  bufferId: string;
  width: number;
  trackHeight: number;
  color: string;
}

function WaveformV5({ bufferId, color, trackHeight, width }: Props) {
  const regionId = useContext(RegionContext);
  const { peakWaveform, correlation } = usePeakWaveformAnalyzer(bufferId);
  const ticksToPixel = useTicksToPixel();
  const offset = useRecoilValue(regionStore.offset(regionId));

  if (peakWaveform === null) {
    return null;
  }

  return (
    <Stage width={width} height={trackHeight} options={{ transparent: true, resolution: 1 }}>
      <Waveform color={color} offset={ticksToPixel(offset)} waveform={peakWaveform} height={trackHeight} correlation={correlation} />
    </Stage>
  );
}

export default WaveformV5;
