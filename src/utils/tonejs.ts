import * as Tone from 'tone';
import { ToneAudioBuffersUrlMap } from 'tone';

export const toneChannelFactory = () => new Tone.Channel(0, 0);

export const toneMeterFactory = (smoothing: number = 0.95) => new Tone.Meter({smoothing});

export const toneAudioInputFactorySync = () => new Tone.UserMedia();

export const toneRecorderFactory = () => new Tone.Recorder();

export const tonePlayersFactory = (regionBuffers?: ToneAudioBuffersUrlMap) => new Tone.Players(regionBuffers);

export const toneMergeFactory = () => new Tone.Merge();

export const audioInputFactory = async () => {
  const audioInterface = new Tone.UserMedia();

  return await audioInterface.open();
}