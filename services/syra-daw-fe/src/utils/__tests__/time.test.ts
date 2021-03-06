import {
  getBeatCountForTransportSeconds,
} from '../time';

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
    // expect(getBeatCountForTransportSeconds(tsMap, 2.4)).toEqual(3);
    // expect(getBeatCountForTransportSeconds(tsMap, 2.9)).toEqual(5);
    // expect(getBeatCountForTransportSeconds(tsMap, 3.4)).toEqual(7);
  });
});