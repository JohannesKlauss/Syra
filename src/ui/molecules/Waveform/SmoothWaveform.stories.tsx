import SmoothWaveform from './SmoothWaveform';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';
import React from 'react';
import { ThemeKnob } from '../../../stories/ThemeKnob';
import { encodeB64ToArrayBuffer } from '../../../utils/binary';

export default {
  component: SmoothWaveform,
  title: 'SmoothWaveform',
  decorators: [withKnobs],
};

export const Default = () => {
  const label = 'Audio';
  const accept = '.wav, .mp3';
  let arrayBuffer: ArrayBuffer | undefined = undefined;

  const width = number('Width', 300);
  const height = number('Height', 70);
  const smoothing = number('Smoothing', 2);
  const selectedColor = color('Waveform color', '#fff');
  const file = files(label, accept);

  if (file.length > 0) {
    arrayBuffer = encodeB64ToArrayBuffer(file[0].split(',')[1]);
  }

  return (
    <ThemeKnob>
      <SmoothWaveform buffer={arrayBuffer} width={width} height={height} smoothing={smoothing} color={selectedColor}/>
    </ThemeKnob>
  );
};