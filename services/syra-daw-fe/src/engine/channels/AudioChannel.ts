import { ChannelMode, ChannelType } from '../../types/Channel';
import * as Tone from 'tone';
import { AudioRegionManager } from '../region/AudioRegionManager';
import { AbstractRecordableChannel } from './AbstractRecordableChannel';

export class AudioChannel extends AbstractRecordableChannel {
  protected inputNode = new AudioRegionManager();
  protected outputNode = Tone.Destination;
  protected type: ChannelType = ChannelType.AUDIO;

  protected recorderNode: AudioNode = Tone.getContext().createAudioWorkletNode('recorder-worklet');

  constructor(id: string, channelMode: ChannelMode = ChannelMode.MONO, protected audioInNode: AudioNode) {
    super(id, channelMode);

    this.connectInternalNodes();
  }

  protected connectInternalNodes() {
    Tone.connectSeries(this.inputNode, this.volumeNode, this.soloNode, this.muteNode, this.rmsNode, this.outputNode);
  }

  protected updateArming() {
    if (!this.audioInNode || !this.recorderNode) {
      return;
    }

    try {
      Tone.disconnect(this.audioInNode, this.recorderNode);
    } catch (e) {}

    if (this.isArmed) {
      Tone.connectSeries(this.audioInNode, this.recorderNode);
    }
  }

  protected updateInputMonitoring() {
    if (!this.audioInNode || !this.volumeNode) {
      return;
    }

    try {
      Tone.disconnect(this.audioInNode, this.volumeNode);
    } catch (e) {}

    if (this.isInputMonitoringActive) {
      Tone.connectSeries(this.audioInNode, this.volumeNode);
    }
  }

  public dispose() {
    super.dispose();

    this.audioInNode.disconnect();
    this.recorderNode.disconnect();
  }

  protected updateChannelMode(mode: ChannelMode): void {}

  get regionManager(): AudioRegionManager {
    return this.inputNode;
  }

  public static async createAudioInNode() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

    return Tone.getContext().createMediaStreamSource(stream);
  }
}
