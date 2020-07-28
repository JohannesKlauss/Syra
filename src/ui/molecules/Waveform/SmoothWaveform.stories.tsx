import SmoothWaveform from './SmoothWaveform';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';
import React from 'react';
import { ThemeKnob } from '../../../stories/ThemeKnob';

export default {
  component: SmoothWaveform,
  title: 'SmoothWaveform',
  decorators: [withKnobs],
};

const ctx = new AudioContext();

function str2ab(str: string) {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

export const waveformData = {
  height: 70,
  width: 300,
  color: '#fff',
};

export const Default = () => <ThemeKnob><SmoothWaveform {...waveformData}/></ThemeKnob>;

export const asDynamicVariables = () => {
  const width = number('Width', 300);
  const height = number('Height', 70);
  const selectedColor = color('Waveform color', '#fff');
  const label = 'Audio';
  const accept = '.wav, .mp3';
  let audioBuffer: AudioBuffer | undefined = undefined;

  const file = files(label, accept);

  if (file.length > 0) {
    ctx.decodeAudioData(str2ab(file[0])).then(res => audioBuffer = res);
  }

  // Create an empty three-second stereo buffer at the sample rate of the AudioContext
  var myArrayBuffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);

// Fill the buffer with white noise;
// just random values between -1.0 and 1.0
  for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
    // This gives us the actual array that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < myArrayBuffer.length; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 0.5 - 1;
    }
  }


  return <ThemeKnob><SmoothWaveform audioBuffer={myArrayBuffer} width={width} height={height} color={selectedColor}/></ThemeKnob>;
};