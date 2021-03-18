import { ChannelMode, ChannelType } from "../../types/Channel";
import * as Tone from "tone";
import { AudioRegionManager } from "../region/AudioRegionManager";
import { AbstractRecordableChannel } from "./AbstractRecordableChannel";

export class InstrumentChannel extends AbstractRecordableChannel {
  protected inputNode = new AudioRegionManager();
  protected outputNode = Tone.Destination

  protected type: ChannelType = ChannelType.INSTRUMENT;

  constructor(id: string, channelMode: ChannelMode = ChannelMode.MONO) {
    super(id, channelMode);

    this.connectInternalNodes();
  }

  protected connectInternalNodes() {
    Tone.connectSeries(this.inputNode, this.volumeNode, this.soloNode, this.muteNode, this.rmsNode, this.outputNode);
  }

  protected updateArming() {
  }

  protected updateInputMonitoring() {
  }

  protected updateChannelMode(mode: ChannelMode): void {}

  get regionManager(): AudioRegionManager {
    return this.inputNode;
  }
}