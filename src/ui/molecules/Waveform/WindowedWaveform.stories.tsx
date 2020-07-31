import { color, files, number, withKnobs } from '@storybook/addon-knobs';
import { encodeB64ToArrayBuffer } from '../../../utils/binary';
import { ThemeKnob } from '../../../stories/ThemeKnob';
import React from 'react';
import WindowedWaveform from './WindowedWaveform';

export default {
  component: WindowedWaveform,
  title: 'WindowedWaveform',
  decorators: [withKnobs],
};

export const Default = () => {
  const label = 'Audio';
  const accept = '.wav, .mp3';
  let arrayBuffer: ArrayBuffer | undefined = undefined;

  const completeWidth = number('Width', 300, {}, 'Parameters');
  const height = number('Height', 70, {}, 'Parameters');
  const offset = number('offset', 0, {}, 'Parameters');
  const paddingLeft = number('paddingLeft', 0, {}, 'Parameters');
  const smoothing = number('Smoothing', 2, { range: true, min: 1, max: 6, step: 0.1 }, 'Parameters');
  const selectedColor = color('Waveform color', '#fff', 'Parameters');
  const file = files(label, accept, undefined, 'Parameters');

  if (file.length > 0) {
    arrayBuffer = encodeB64ToArrayBuffer(file[0].split(',')[1]);
  }

  return (
    <ThemeKnob>
      <WindowedWaveform buffer={arrayBuffer} completeWidth={completeWidth} offset={offset} paddingLeft={paddingLeft}
                        height={height} smoothing={smoothing} color={selectedColor}/>
    </ThemeKnob>
  );
};