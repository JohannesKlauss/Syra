const startAt = 2;
const offset = 0.5;

const fixture = [
  5268,
  2.5390929705215424,
  4748,
  3.5607709750566894,
  5292,
  4.5940589569161006,
  4725,
  5.604126984126985,
  5478,
  6.620000000000001,
  5329,
  7.641678004535152,
  5748,
  8.657551020408167,
  4975,
  9.685034013605446,
  5924,
  10.706712018140593,
  5379,
  11.722585034013608,
  4984,
  0,
  359,
  0
];

describe('Recorder', () => {
  it('should calculate the standard mean for a blob size', () => {
    const durationsPerCycle = [];

    for (let i = 3; i < fixture.length; i += 2) {
      const prevTime = fixture[i - 2];
      const time = fixture[i];

      if (time > startAt && prevTime > startAt && prevTime !== 0 && time !== 0) {
        durationsPerCycle.push((time - prevTime) / fixture[i - 1]);
      }
    }

    const meanDurationPerSample = durationsPerCycle.reduce((prev, curr) => prev + curr, 0) / durationsPerCycle.length

    console.log('meanDurationPerSample', meanDurationPerSample);

    let offset: number = 0;
    let i: number = 1;

    do {
      const time = fixture[i];

      if (time > offset) {
        offset = time - startAt;

        break;
      }

      i += 2;
    } while(offset === 0);

    const samplesToCut = Math.ceil(offset / meanDurationPerSample);

    console.log('offset', offset);
    console.log('samples to cut', samplesToCut);
  });
});