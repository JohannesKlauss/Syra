import { ChannelMode, ChannelType } from '../../types/Channel';
import * as Tone from 'tone';

export abstract class AbstractChannel {
  private _label: string = '';

  protected rmsNode = new Tone.Meter({ smoothing: 0.9, channels: 2 });
  protected panNode = new Tone.Panner();
  protected soloNode = new Tone.Solo();
  protected muteNode = new Tone.Volume();
  protected volumeNode = new Tone.Volume();
  private plugins: AudioNode[] = [];

  protected abstract type: ChannelType;

  protected abstract inputNode: Tone.InputNode | undefined;
  protected abstract outputNode: Tone.OutputNode | Tone.InputNode;

  constructor(private _id: string, protected _channelMode: ChannelMode = ChannelMode.MONO) {
    this.updateChannelMode(this._channelMode);
  }

  protected updateChannelMode(mode: ChannelMode): void {
    this.disconnectInternalNodes();

    const channelCount = mode === ChannelMode.MONO ? 1 : 2;

    this.volumeNode.channelCountMode = this.rmsNode.channelCountMode = this.soloNode.channelCountMode = this.muteNode.channelCountMode = this.panNode.channelCountMode =
      'explicit';
    this.volumeNode.channelCount = this.rmsNode.channelCount = this.soloNode.channelCount = this.muteNode.channelCount = channelCount;

    this.connectInternalNodes();
  }

  protected connectInternalNodes() {
    if (this.inputNode) {
      this.disconnectInternalNodes();
      Tone.connectSeries(this.inputNode, ...this.plugins, this.volumeNode, this.soloNode, this.muteNode, this.panNode, this.rmsNode, this.outputNode);
    }
  }

  protected disconnectInternalNodes() {
    try {
      this.volumeNode.disconnect();
      this.soloNode.disconnect();
      this.muteNode.disconnect();
      this.rmsNode.disconnect();

      this.plugins.forEach(plugin => plugin.disconnect());
    } catch (e) {}
  }

  public dispose(): void {
    this.volumeNode.dispose();
    this.rmsNode.dispose();
    this.soloNode.dispose();
    this.muteNode.dispose();
  }

  public setActivePlugins(plugins: AudioNode[]) {
    this.plugins = plugins;

    this.disconnectInternalNodes();
    this.connectInternalNodes();
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
