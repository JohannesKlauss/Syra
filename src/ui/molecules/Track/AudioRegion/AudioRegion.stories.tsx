import { boolean, files, number, withKnobs } from '@storybook/addon-knobs';
import { ThemeKnob } from '../../../../stories/ThemeKnob';
import StorybookRegion from '../../../../stories/StorybookRegion';
import React from 'react';
import AudioRegion from './AudioRegion';

export default {
  component: AudioRegion,
  title: 'AudioRegion',
  decorators: [withKnobs, (story: CallableFunction) => <div style={{ height: 70 }}>{story()}</div>],
};

const state = {
  audioBuffer: null,
  trimStart: 0,
  trimEnd: 0,
  start: 0,
  isMuted: false,
  isSolo: false,
  isRecording: false,
  end: 0,
  files: [] as string[],
};

export const Default = () => {
  state.start = number('start', 0, {}, 'State');
  state.end = number('end', 0, {}, 'State');
  state.trimStart = number('trimStart', 0, {}, 'State');
  state.trimEnd = number('trimEnd', 0, {}, 'State');
  state.isMuted = boolean('isMuted', false,'State');
  state.isSolo = boolean('isSolo', false,'State');
  state.isRecording = boolean('isRecording', false,'State');
  state.files = files('audio', '.wav, .mp3', undefined, 'Parameters');

  return (
    <ThemeKnob>
      <StorybookRegion {...state}>
        <AudioRegion/>
      </StorybookRegion>
    </ThemeKnob>
  );
};