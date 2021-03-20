import { ChannelMode, ChannelType } from '../../types/Channel';
import * as Tone from 'tone';
import { AudioRegionManager } from '../region/AudioRegionManager';
import { AbstractRecordableChannel } from './AbstractRecordableChannel';
import { MasterChannel } from './MasterChannel';

export class AudioChannel extends AbstractRecordableChannel {
  protected inputNode = new AudioRegionManager();
  protected outputNode = MasterChannel.getInstance().input as AudioNode;
  protected type: ChannelType = ChannelType.AUDIO;

  protected audioInNode: AudioNode | null = null;
  protected recorderNode: AudioNode = Tone.getContext().createAudioWorkletNode('recorder-worklet');

  constructor(id: string, channelMode: ChannelMode = ChannelMode.MONO) {
    super(id, channelMode);

    this.createAudioInNode();
    this.updateChannelMode(channelMode);
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

    this.audioInNode?.disconnect();
    this.recorderNode.disconnect();
  }

  get regionManager(): AudioRegionManager {
    return this.inputNode;
  }

  private createAudioInNode() {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => (this.audioInNode = Tone.getContext().createMediaStreamSource(stream)));
  }
}
