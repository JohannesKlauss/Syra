import * as Tone from 'tone';

export const toneChannelFactory = () => new Tone.Channel(0, 0);

export const toneMeterFactory = (smoothing: number = 0.95) => new Tone.Meter({smoothing});

export const toneDcMeterFactory = () => new Tone.DCMeter();

export const toneAudioInputFactorySync = () => new Tone.UserMedia();

export const audioInputFactory = async () => {
  const audioInterface = new Tone.UserMedia();

  return await audioInterface.open();
}