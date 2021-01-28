import * as Tone from 'tone';

export const convertTransportPositionStringToQuarters = (position: string) => {
  // Remember that the ToneJS internal transport works on 1/4s. So 1:0:0 is actually one quarter.
  // 4 Sixteens are 1 quarter, so we divide the sixteens value by 4 and add it to the quarter value.
  const barsQuartersSixteens = position.split(':').map(parseFloat);

  return barsQuartersSixteens[0] + (barsQuartersSixteens[2] / 4);
}

export const getToneJsPositionInQuarter = () => convertTransportPositionStringToQuarters(Tone.getTransport().position as string);

export const getToneJsTransport = () => Tone.getTransport();