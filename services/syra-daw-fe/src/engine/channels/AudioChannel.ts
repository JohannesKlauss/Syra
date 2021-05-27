import { ChannelType } from '../../types/Channel';
import * as Tone from 'tone';
import { AudioRegionManager } from '../region/AudioRegionManager';
import { AbstractRecordableChannel } from './AbstractRecordableChannel';
import { MasterChannel } from './MasterChannel';

export class AudioChannel extends AbstractRecordableChannel {
  protected inputNode = new AudioRegionManager();
  protected outputNode = MasterChannel.getInstance().input as Tone.ToneAudioNode;
  protected type: ChannelType = ChannelType.AUDIO;

  protected audioInNode: AudioNode | null = null;
  protected recorderNode: AudioNode = Tone.getContext().createAudioWorkletNode('recorder-worklet');

  protected async updateArming() {
    if (!this.audioInNode) {
      this.audioInNode = await this.createAudioInNode();
    }

    try {
      Tone.disconnect(this.audioInNode, this.recorderNode);
    } catch (e) {}

    if (this.isArmed) {
      Tone.connectSeries(this.audioInNode, this.recorderNode);
    }
  }

  protected async updateInputMonitoring() {
    if (!this.audioInNode) {
      this.audioInNode = await this.createAudioInNode();
    }

    try {
      Tone.disconnect(this.audioInNode, this.rmsNode);
    } catch (e) {}

    if (this.isInputMonitoringActive) {
      Tone.connectSeries(this.audioInNode, this.rmsNode);
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

  private async createAudioInNode() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

    return Tone.getContext().createMediaStreamSource(stream);
  }
}
