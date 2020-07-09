import * as Tone from 'tone';

export const toneChannelFactory = () => new Tone.Channel(0, 0);

export const toneMeterFactory = () => new Tone.Meter();

export const toneAudioInputFactorySync = () => new Tone.UserMedia();

export const audioInputFactory = async () => {
  const audioInterface = new Tone.UserMedia();

  return await audioInterface.open();
}