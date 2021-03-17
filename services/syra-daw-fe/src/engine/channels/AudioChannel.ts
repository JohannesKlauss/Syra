import { AbstractChannel } from './AbstractChannel';
import { ChannelMode, ChannelType } from "../../types/Channel";
import * as Tone from "tone";
import { AudioRegionManager } from "../region/AudioRegionManager";

export class AudioChannel extends AbstractChannel {
  protected inputNode = new AudioRegionManager();
  protected outputNode = Tone.Destination;
  protected type: ChannelType = ChannelType.AUDIO;

  protected recorderNode: AudioNode = Tone.getContext().createAudioWorkletNode('recorder-worklet');

  constructor(id: string, channelMode: ChannelMode = ChannelMode.MONO, protected audioInNode: AudioNode) {
    super(id, channelMode);
  }

  protected connectInternalNodes() {
    super.connectInternalNodes();

    //Tone.connectSeries(this.audioInNode, this.recorderNode);
    //Tone.connectSeries(this.audioInNode, this.volumeNode);
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