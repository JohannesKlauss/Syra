import { ChannelMode, ChannelType } from '../../types/Channel';
import * as Tone from 'tone';

export abstract class AbstractChannel {
  private _label: string = ''; // Set this to have a better debugging experience.

  protected rmsNode = new Tone.Meter({ smoothing: 0.9, channels: this._channelMode === ChannelMode.STEREO ? 2 : 1 });
  protected panNode = new Tone.Panner({ channelCount: this._channelMode === ChannelMode.STEREO ? 2 : 1 });
  protected soloNode = new Tone.Solo();
  protected muteNode = new Tone.Volume();
  protected volumeNode = new Tone.Volume();

  protected abstract type: ChannelType;

  protected abstract inputNode: Tone.InputNode | undefined;
  protected abstract outputNode: Tone.OutputNode | Tone.InputNode;

  protected constructor(private _id: string, protected _channelMode: ChannelMode = ChannelMode.MONO) {}

  protected updateChannelMode(mode: ChannelMode): void {
    this.disconnectInternalNodes();

    const channelCount = mode === ChannelMode.MONO ? 1 : 2;

    // TODO: SINCE Tone.js uses the Web Audio Analyzer node we have to reconstruct this
    this.rmsNode = new Tone.Meter({ smoothing: 0.9, channels: channelCount });

    this.volumeNode.channelCountMode = this.rmsNode.channelCountMode = this.soloNode.channelCountMode = this.muteNode.channelCountMode = this.panNode.channelCountMode =
      'explicit';
    this.volumeNode.channelCount = this.rmsNode.channelCount = this.soloNode.channelCount = this.muteNode.channelCount = this.panNode.channelCount = channelCount;

    this.connectInternalNodes();
  }

  protected connectInternalNodes() {
    if (this.inputNode) {
      Tone.connectSeries(this.inputNode, this.panNode, this.volumeNode, this.soloNode, this.muteNode, this.rmsNode, this.outputNode);
    }
  }

  protected disconnectInternalNodes() {
    try {
      this.volumeNode.disconnect();
      this.soloNode.disconnect();
      this.muteNode.disconnect();
      this.rmsNode.disconnect();
    } catch (e) {}
  }

  public dispose(): void {
    this.volumeNode.dispose();
    this.rmsNode.dispose();
    this.soloNode.dispose();
    this.muteNode.dispose();
  }

  get input() {
    return this.inputNode;
  }

  get output() {
    return this.outputNode;
  }

  get mute(): boolean {
    return this.muteNode.mute;
  }

  set mute(mute: boolean) {
    this.muteNode.set({ mute });
  }

  get solo(): boolean {
    return this.soloNode.solo;
  }

  set solo(solo: boolean) {
    this.soloNode.set({ solo });
  }

  get volume(): number {
    return this.volumeNode.volume.value;
  }

  set volume(volume: number) {
    this.volumeNode.set({ volume });
  }

  get pan() {
    return this.panNode.pan.value;
  }

  set pan(pan: number) {
    this.panNode.set({pan});
  }

  get rmsValue(): number | number[] {
    return this.rmsNode.getValue();
  }

  get channelMode(): ChannelMode {
    return this._channelMode;
  }

  set channelMode(mode: ChannelMode) {
    if (this._channelMode !== mode) {
      this.updateChannelMode(mode);
    }

    this._channelMode = mode;
  }

  get id() {
    return this._id;
  }

  get label() {
    return this._label;
  }

  set label(label: string) {
    this._label = label;
  }
}
