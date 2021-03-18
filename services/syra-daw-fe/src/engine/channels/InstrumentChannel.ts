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

  protected updateArming() {
  }

  protected updateInputMonitoring() {
  }

  get regionManager(): AudioRegionManager {
    return this.inputNode;
  }
}