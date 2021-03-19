import { ChannelMode, ChannelType } from '../../types/Channel';
import * as Tone from 'tone';

export abstract class AbstractChannel {
  private _label: string = ''; // Set this to have a better debugging experience.

  protected peakNode = new Tone.Meter({ smoothing: 0.9 });
  protected soloNode = new Tone.Solo();
  protected muteNode = new Tone.Volume();
  protected volumeNode = new Tone.Volume();

  protected abstract type: ChannelType;

  protected abstract inputNode: Tone.ToneAudioNode;
  protected abstract outputNode: Tone.ToneAudioNode;

  protected constructor(private _id: string, protected _channelMode: ChannelMode = ChannelMode.MONO) {}

  protected updateChannelMode(mode: ChannelMode): void {
    this.disconnectInternalNodes();

    const channelCount = mode === ChannelMode.MONO ? 1 : 2;

    this.inputNode.channelCount = channelCount;
    this.volumeNode.channelCount = channelCount;
    this.peakNode.channelCount = channelCount;
    this.soloNode.channelCount = channelCount;
    this.muteNode.channelCount = channelCount;

    this.connectInternalNodes();
  };

  protected connectInternalNodes() {
    Tone.connectSeries(this.inputNode, this.volumeNode, this.soloNode, this.muteNode, this.peakNode, this.outputNode);
  }

  protected disconnectInternalNodes() {
    try {
      this.inputNode.disconnect();
      this.volumeNode.disconnect();
      this.soloNode.disconnect();
      this.muteNode.disconnect();
      this.peakNode.disconnect();
    } catch (e) {}
  }

  public dispose(): void {
    this.inputNode.dispose();
    this.volumeNode.dispose();
    this.peakNode.dispose();
    this.soloNode.dispose();
    this.muteNode.dispose();
    this.outputNode.dispose();
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

  get peakValue(): number | number[] {
    return this.peakNode.getValue();
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
