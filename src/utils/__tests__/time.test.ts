import {
  getBarCountForTransportSeconds,
  getBeatCountForTransportSeconds,
  getBeatsInTempoBlock, getCurrentTempoBlock,
  getProjectLengthInSeconds, getTempoBlockLengthInSeconds,
} from '../time';
import { TIME_CONVERSION_RESOLUTION } from '../../const/musicalConversionConstants';

describe('getBeatCountForTransportSeconds', () => {
  it('should return the correct mod beat for the given seconds', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
    };

    expect(getBeatCountForTransportSeconds(tsMap, 0)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 0.5)).toEqual(2);
    expect(getBeatCountForTransportSeconds(tsMap, 1)).toEqual(3);
    expect(getBeatCountForTransportSeconds(tsMap, 1.5)).toEqual(0);
  });

  it('should incorporate multiple time signatures', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
      2: [4, 4],
    };

    expect(getBeatCountForTransportSeconds(tsMap, 2)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 2.5)).toEqual(2);
    expect(getBeatCountForTransportSeconds(tsMap, 3)).toEqual(3);
    expect(getBeatCountForTransportSeconds(tsMap, 3.5)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 4)).toEqual(1);
  });

  it('should incorporate time signature changes', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
      2: [2, 4],
    };

    expect(getBeatCountForTransportSeconds(tsMap, 2)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 2.5)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 3)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 3.5)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 4)).toEqual(1);
  });

  it('should incorporate base changes in the time signature', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
      2: [8, 8],
    };

    expect(getBeatCountForTransportSeconds(tsMap, 2)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 2.5)).toEqual(3);
    expect(getBeatCountForTransportSeconds(tsMap, 3)).toEqual(5);
    expect(getBeatCountForTransportSeconds(tsMap, 3.5)).toEqual(7);
    expect(getBeatCountForTransportSeconds(tsMap, 3.75)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 4)).toEqual(1);
  });

  it('should incorporate odd time signatures', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
      2: [7, 8],
      5.5: [2, 4],
    };

    expect(getBeatCountForTransportSeconds(tsMap, 2)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 2.5)).toEqual(3);
    expect(getBeatCountForTransportSeconds(tsMap, 3)).toEqual(5);
    expect(getBeatCountForTransportSeconds(tsMap, 3.5)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 3.75)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 4)).toEqual(2);
    expect(getBeatCountForTransportSeconds(tsMap, 4.25)).toEqual(3);
    expect(getBeatCountForTransportSeconds(tsMap, 4.5)).toEqual(4);
    expect(getBeatCountForTransportSeconds(tsMap, 4.75)).toEqual(5);
    expect(getBeatCountForTransportSeconds(tsMap, 5)).toEqual(6);
    expect(getBeatCountForTransportSeconds(tsMap, 5.25)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 5.5)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 6)).toEqual(0);
    expect(getBeatCountForTransportSeconds(tsMap, 6.5)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 7)).toEqual(0);
  });

  it('should always give the next beat if the transportSeconds is in between two beats', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
      2: [7, 8],
      5.5: [2, 4],
    };

    expect(getBeatCountForTransportSeconds(tsMap, 2)).toEqual(1);
    expect(getBeatCountForTransportSeconds(tsMap, 2.4)).toEqual(3);
    expect(getBeatCountForTransportSeconds(tsMap, 2.9)).toEqual(5);
    expect(getBeatCountForTransportSeconds(tsMap, 3.4)).toEqual(7);
  });
});

describe('getBarCountForTransportSeconds', () => {
  it('should return the correct bar for the given seconds', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
    };

    expect(getBarCountForTransportSeconds(tsMap, 0)).toEqual(1);
    expect(getBarCountForTransportSeconds(tsMap, 1)).toEqual(1);
    expect(getBarCountForTransportSeconds(tsMap, 1.5)).toEqual(1);
    expect(getBarCountForTransportSeconds(tsMap, 2)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 2.5)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 2.75)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 3)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 3.5)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 4)).toEqual(3);
  });

  it('should incorporate time signature changes', () => {
    const tsMap: {[name: number]: [number, number]} = {
      0: [4, 4],
      2: [2, 4],
    };

    expect(getBarCountForTransportSeconds(tsMap, 2)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 2.5)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 2.75)).toEqual(2);
    expect(getBarCountForTransportSeconds(tsMap, 3)).toEqual(3);
    expect(getBarCountForTransportSeconds(tsMap, 3.5)).toEqual(3);
    expect(getBarCountForTransportSeconds(tsMap, 4)).toEqual(4);
  });
});

describe('getProjectLengthInSeconds', () => {
  it('should return the correct seconds for the given project length in beats.', () => {
    const tempoMap: {[name: number]: number} = {
      0: 120,
    };

    expect(getProjectLengthInSeconds(tempoMap, 1 * TIME_CONVERSION_RESOLUTION)).toEqual(2);
    expect(getProjectLengthInSeconds(tempoMap, 38 * TIME_CONVERSION_RESOLUTION)).toEqual(76);
  });

  it('should return the correct seconds for the given project length in beats corresponding with a tempo map.', () => {
    const tempoMap: {[name: number]: number} = {
      0: 120,
      2: 240,
      4: 180,
      12: 140,
    };

    expect(getProjectLengthInSeconds(tempoMap, 1 * TIME_CONVERSION_RESOLUTION)).toEqual(2);
    expect(getProjectLengthInSeconds(tempoMap, 2 * TIME_CONVERSION_RESOLUTION)).toEqual(3);
    expect(getProjectLengthInSeconds(tempoMap, 3 * TIME_CONVERSION_RESOLUTION)).toEqual(4);
    expect(getProjectLengthInSeconds(tempoMap, 6 * TIME_CONVERSION_RESOLUTION)).toEqual(8);
    expect(getProjectLengthInSeconds(tempoMap, 9 * TIME_CONVERSION_RESOLUTION)).toEqual(12);
    expect(getProjectLengthInSeconds(tempoMap, 9 * TIME_CONVERSION_RESOLUTION)).toEqual(12);
    expect(getProjectLengthInSeconds(tempoMap, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(72);
  });
});

describe('getBeatsInTempoBlock', () => {
  it('should return the correct number of beats for the given tempo event.', () => {
    const tempoMap: {[name: number]: number} = {
      0: 120,
      2: 240,
      4: 180,
      12: 140,
    };

    expect(getBeatsInTempoBlock(tempoMap, 0, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(4);
    expect(getBeatsInTempoBlock(tempoMap, 2, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(8);
    expect(getBeatsInTempoBlock(tempoMap, 4, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(24);
    expect(getBeatsInTempoBlock(tempoMap, 12, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(140);
  });
});

describe('getTempoBlockLengthInSeconds', () => {
  it('should return the correct number of seconds for the given tempo event.', () => {
    const tempoMap: {[name: number]: number} = {
      0: 120,
      2: 240,
      4: 180,
      12: 140,
    };

    expect(getTempoBlockLengthInSeconds(tempoMap, 0, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(2);
    expect(getTempoBlockLengthInSeconds(tempoMap, 2, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(2);
    expect(getTempoBlockLengthInSeconds(tempoMap, 4, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(8);
    expect(getTempoBlockLengthInSeconds(tempoMap, 12, 44 * TIME_CONVERSION_RESOLUTION)).toEqual(60);
  });
});

describe('getCurrentTempoBlock', () => {
  it('should tempo changeAt key for the given transport seconds.', () => {
    const tempoMap: {[name: number]: number} = {
      0: 120,
      2: 240,
      4: 180,
      12: 140,
    };

    expect(getCurrentTempoBlock(tempoMap, 0.3)).toEqual(0);
    expect(getCurrentTempoBlock(tempoMap, 2)).toEqual(2);
    expect(getCurrentTempoBlock(tempoMap, 2.3)).toEqual(2);
    expect(getCurrentTempoBlock(tempoMap, 4.3)).toEqual(4);
    expect(getCurrentTempoBlock(tempoMap, 12)).toEqual(12);
    expect(getCurrentTempoBlock(tempoMap, 56)).toEqual(12);
    expect(getCurrentTempoBlock(tempoMap, 5464)).toEqual(12);
  });
});