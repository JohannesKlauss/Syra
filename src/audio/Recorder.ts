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

  private offset: number = 0;

  constructor() {
    // TODO: THIS WILL ONLY CREATE ONE SPECIFIC CHANNEL. WE HAVE TO INPUT THE CHANNEL WE WANT.
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      });

      this.mediaRecorder.addEventListener('dataavailable', (e: BlobEvent) => {
        const s = Tone.getTransport().seconds;

        if (s > this.startedAtTransportTime && this.offset === 0) {
          this.offset = Tone.getContext().currentTime - this.startedAtContextTime;
        }

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

        this.onComplete && this.onComplete(data, this.offset - 0.76); // Unsure if this is the actual system latency?
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
    this.offset = 0;
    this.startedAtContextTime = Tone.getContext().currentTime;
    this.startedAtTransportTime = Tone.getTransport().seconds;
    this.mediaRecorder?.start(callbackInterval);
  }

  stop() {
    this.shouldStop = true;
  }
}