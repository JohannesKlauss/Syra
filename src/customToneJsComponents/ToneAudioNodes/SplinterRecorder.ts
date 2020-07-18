import { assert } from 'tone/Tone/core/util/Debug';
import { ToneAudioNode, ToneAudioNodeOptions } from 'tone/Tone/core/context/ToneAudioNode';
import { Gain } from 'tone/Tone/core/context/Gain';
import { optionsFromArguments } from 'tone/Tone/core/util/Defaults';
import { theWindow } from 'tone/Tone/core/context/AudioContext';
import { PlaybackState } from 'tone/Tone/core/util/StateTimeline';

export interface SplinterRecorderOptions extends ToneAudioNodeOptions {
  mimeType?: string;
  timeslice?: number;
}

export class SplinterRecorder extends ToneAudioNode<SplinterRecorderOptions> {

  readonly name = "Recorder";

  /**
   * Recorder uses the Media Recorder API
   */
  private _recorder: MediaRecorder;

  /**
   * MediaRecorder requires
   */
  private _stream: MediaStreamAudioDestinationNode;

  readonly input: Gain;
  readonly output: undefined;

  constructor(options?: Partial<SplinterRecorderOptions>);
  constructor() {

    super(optionsFromArguments(SplinterRecorder.getDefaults(), arguments, ["gain", "units"]));
    const options = optionsFromArguments(SplinterRecorder.getDefaults(), arguments, ["gain", "units"]);

    this.input = new Gain({
      context: this.context
    });

    assert(SplinterRecorder.supported, "Media Recorder API is not available");

    this._stream = this.context.createMediaStreamDestination();
    this.input.connect(this._stream);
    this._recorder = new MediaRecorder(this._stream.stream, {
      mimeType: options.mimeType,
      timeslice: options.timeslice,
    });
  }

  static getDefaults(): SplinterRecorderOptions {
    return ToneAudioNode.getDefaults();
  }

  /**
   * The mime type is the format that the audio is encoded in. For Chrome
   * that is typically webm encoded as "vorbis".
   */
  get mimeType(): string {
    return this._recorder.mimeType;
  }

  /**
   * Test if your platform supports the Media Recorder API. If it's not available,
   * try installing this (polyfill)[https://www.npmjs.com/package/audio-recorder-polyfill].
   */
  static get supported(): boolean {
    return theWindow !== null && Reflect.has(theWindow, "MediaRecorder");
  }

  /**
   * Get the playback state of the Recorder, either "started", "stopped" or "paused"
   */
  get state(): PlaybackState {
    if (this._recorder.state === "inactive") {
      return "stopped";
    } else if (this._recorder.state === "paused") {
      return "paused";
    } else {
      return "started";
    }
  }

  /**
   * Start the Recorder. Returns a promise which resolves
   * when the recorder has started.
   */
  async start() {
    assert(this.state !== "started", "Recorder is already started");
    const startPromise = new Promise(done => {
      const handleStart = () => {
        this._recorder.removeEventListener("start", handleStart, false);

        done();
      };

      this._recorder.addEventListener("start", handleStart, false);
    });

    this._recorder.start();
    return await startPromise;
  }

  /**
   * Stop the recorder. Returns a promise with the recorded content until this point
   * encoded as [[mimeType]]
   */
  async stop(): Promise<Blob> {
    assert(this.state !== "stopped", "Recorder is not started");
    const dataPromise: Promise<Blob> = new Promise(done => {
      const handleData = (e: BlobEvent) => {
        this._recorder.removeEventListener("dataavailable", handleData, false);

        done(e.data);
      };

      this._recorder.addEventListener("dataavailable", handleData, false);
    });
    this._recorder.stop();
    return await dataPromise;
  }

  onDataAvailable(callback: (e: BlobEvent) => void): void {
    
  }

  /**
   * Pause the recorder
   */
  pause(): this {
    assert(this.state === "started", "Recorder must be started");
    this._recorder.pause();
    return this;
  }

  dispose(): this {
    super.dispose();
    this.input.dispose();
    this._stream.disconnect();
    return this;
  }
}
