import { ChannelMode, ChannelType } from '../../types/Channel';
import * as Tone from 'tone';

export abstract class AbstractChannel {
  private _label: string = ''; // Set this to have a better debugging experience.

  protected rmsNode = new Tone.Meter({ smoothing: 0.9 });
  protected soloNode = new Tone.Solo();
  protected muteNode = new Tone.Volume();
  protected volumeNode = new Tone.Volume();

  protected outputNode: Tone.ToneAudioNode = Tone.Destination;

  protected abstract type: ChannelType;

  protected abstract inputNode: Tone.ToneAudioNode;

  constructor(private _id: string, protected channelMode: ChannelMode = ChannelMode.MONO) {
    this.connectInternalNodes();
  }

  protected abstract updateChannelMode(mode: ChannelMode): void;

  protected connectInternalNodes(): void {
    Tone.connectSeries(this.inputNode, this.outputNode);
  }

  public dispose(): void {
    this.inputNode.dispose();
    this.volumeNode.dispose();
    this.rmsNode.dispose();
    this.soloNode.dispose();
    this.muteNode.dispose();
    this.outputNode.dispose();
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

  get rmsValue(): number | number[] {
    return this.rmsNode.getValue();
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
