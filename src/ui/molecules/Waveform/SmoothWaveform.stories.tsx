import SmoothWaveform from './SmoothWaveform';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';
import React from 'react';
import { ThemeKnob } from '../../../stories/ThemeKnob';
import { encodeB64ToArrayBuffer } from '../../../utils/binary';

export default {
  component: SmoothWaveform,
  title: 'SmoothWaveform',
  decorators: [withKnobs, (story: CallableFunction) => <div style={{ margin: '1rem', border: '1px solid white' }}>{story()}</div>],
};

export const Default = () => {
  const label = 'Audio';
  const accept = '.wav, .mp3';
  let arrayBuffer: ArrayBuffer | undefined = undefined;

  const width = number('Width', 300, {}, 'Parameters');
  const height = number('Height', 70, {}, 'Parameters');
  const smoothing = number('Smoothing', 2, {range: true, min: 1, max: 6, step: 0.1}, 'Parameters');
  const selectedColor = color('Waveform color', '#fff', 'Parameters');
  const file = files(label, accept, undefined, 'Parameters');

  if (file.length > 0) {
    arrayBuffer = encodeB64ToArrayBuffer(file[0].split(',')[1]);
  }

  return (
    <ThemeKnob>
      <SmoothWaveform buffer={arrayBuffer} width={width} height={height} smoothing={smoothing} color={selectedColor}/>
    </ThemeKnob>
  );
};