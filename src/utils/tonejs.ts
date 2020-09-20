import * as Tone from 'tone';

export const getToneJsPositionInQuarter = () => parseInt((Tone.getTransport().position as string).split(':')[0]);