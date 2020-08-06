import * as Tone from 'tone';

export class Recorder {
  private shouldStop: boolean = false;

  private stopped: boolean = true;

  private mediaRecorder: MediaRecorder | null = null;

  private recordedChunks: Blob[] = [];

  public onDataAvailable: ((chunk: Blob, transportSeconds: number) => void) | null = null;

  public onComplete: ((chunks: Blob, offset: number) => void) | null = null;

  private startedAtTransportTime: number = 0;

  private startedAtContextTime: number = 0;

  private dataTimeCorrelation: number[] = [];

  private offset: number = 0;

  constructor() {
    // TODO: THIS WILL ONLY CREATE ONE SPECIFIC CHANNEL. WE HAVE TO INPUT THE CHANNEL WE WANT.
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      });

      this.mediaRecorder.addEventListener('dataavailable', (e: BlobEvent) => {
        this.dataTimeCorrelation.push(e.data.size, Tone.getContext().currentTime);

        if (e.data.size > 0) {
          this.recordedChunks.push(e.data);

          this.onDataAvailable && this.onDataAvailable(e.data, Tone.getTransport().seconds);
        }

        if (this.shouldStop && !this.stopped) {
          this.mediaRecorder!.stop();
          this.stopped = true;
        }
      });

      this.mediaRecorder.addEventListener('stop', () => {
        const data = new Blob(this.recordedChunks, { type: 'audio/webm' });

        this.onComplete && this.onComplete(data, this.calcOffset() + 0.05 + 0.18); // Unsure if this is the actual roundtrip latency?
      });
    });
  }

  isRecording() {
    return !this.stopped;
  }

  start(callbackInterval: number) {
    this.shouldStop = false;
    this.stopped = false;
    this.recordedChunks = [];
    this.dataTimeCorrelation = [];
    this.offset = 0;
    this.startedAtContextTime = Tone.getContext().currentTime;
    console.log('start recording', this.startedAtContextTime);
    this.startedAtTransportTime = Tone.getTransport().seconds;
    this.mediaRecorder?.start(callbackInterval);
  }

  stop() {
    this.shouldStop = true;
  }

  private calcOffset() {
    const durationsPerCycle = [];

    for (let i = 3; i < this.dataTimeCorrelation.length; i += 2) {
      const prevTime = this.dataTimeCorrelation[i - 2];
      const time = this.dataTimeCorrelation[i];

      if (time > this.startedAtContextTime && prevTime > this.startedAtContextTime && prevTime !== 0 && time !== 0) {
        durationsPerCycle.push(time - prevTime);
      }
    }

    const meanDurationPerSample = durationsPerCycle.reduce((prev, curr) => prev + curr, 0) / durationsPerCycle.length;

    console.log('meanDurationPerBlock', meanDurationPerSample);
    console.log('block Length', meanDurationPerSample * durationsPerCycle.length);

    let offset: number = 0;
    let i: number = 1;

    do {
      const time = this.dataTimeCorrelation[i];

      if (time > offset) {
        offset = time - this.startedAtContextTime;

        break;
      }

      i += 2;
    } while(offset === 0);

    console.log('offset', Math.max(offset - 1, 0));

    return Math.max(offset - 1, 0);
  }
}