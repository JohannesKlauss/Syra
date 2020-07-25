export class Recorder {
  private shouldStop: boolean = false;

  private stopped: boolean = false;

  private mediaRecorder: MediaRecorder | null = null;

  private recordedChunks: Blob[] = [];

  public onDataAvailable: ((chunk: Blob) => void) | null = null;

  public onComplete: ((chunks: Blob) => void) | null = null;

  constructor() {
    // TODO: THIS WILL ONLY CREATE ONE SPECIFIC CHANNEL. WE HAVE TO INPUT THE CHANNEL WE WANT.
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      });

      this.mediaRecorder.addEventListener('dataavailable', (e: BlobEvent) => {
        if (e.data.size > 0) {
          this.recordedChunks.push(e.data);

          this.onDataAvailable && this.onDataAvailable(e.data);
        }

        if(this.shouldStop && !this.stopped) {
          this.mediaRecorder!.stop();
          this.stopped = true;
        }
      });

      this.mediaRecorder.addEventListener('stop', () => {
        this.onComplete && this.onComplete(new Blob(this.recordedChunks, {type: 'audio/webm'}));
      });
    });
  }

  isRecording() {
    return !this.stopped;
  }

  start(callbackInterval: number) {
    this.shouldStop = false;
    this.stopped = false;
    this.mediaRecorder?.start(callbackInterval);
  }

  stop() {
    this.shouldStop = true;
  }
}