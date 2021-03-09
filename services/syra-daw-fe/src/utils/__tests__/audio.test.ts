import { amplitudeTodB, dBToAmplitude } from "../audio/audio";

describe('amplitudeTodB', function() {
  it("should return correct dB values for a given amplitude", function() {
    expect(amplitudeTodB(0)).toEqual(-Infinity);
    expect(amplitudeTodB(1)).toEqual(0);
    expect(amplitudeTodB(0.5)).toEqual(-6.020599913279623);
    expect(amplitudeTodB(0.25)).toEqual(-12.041199826559247);
    expect(amplitudeTodB(0.75)).toEqual(-2.4987747321659985);
  });
});

describe('dBToAmplitude', function() {
  it("should return correct amplitude values for a given dB", function() {
    expect(dBToAmplitude(-Infinity)).toEqual(0);
    expect(dBToAmplitude(0)).toEqual(1);

    // We use parseFloat and toFixed because JS introduces floating rounding errors.
    // If we don't do this, -6.020599913279623 will return 0.500000000000001.
    // This isn't really of any relevance for us.
    expect(parseFloat(dBToAmplitude(-6.020599913279623).toFixed(1))).toEqual(0.5);
    expect(parseFloat(dBToAmplitude(-12.041199826559247).toFixed(2))).toEqual(0.25);
    expect(parseFloat(dBToAmplitude(-2.4987747321659985).toFixed(2))).toEqual(0.75);
  });
});