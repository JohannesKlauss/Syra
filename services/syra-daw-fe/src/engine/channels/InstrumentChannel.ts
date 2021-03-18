import { AbstractChannel } from './AbstractChannel';
import { ChannelMode, ChannelType } from "../../types/Channel";
import * as Tone from "tone";
import { AudioRegionManager } from "../region/AudioRegionManager";

export class InstrumentChannel extends AbstractChannel {
  protected inputNode = new AudioRegionManager();
  protected outputNode = Tone.Destination

  protected type: ChannelType = ChannelType.INSTRUMENT;

  constructor(id: string, channelMode: ChannelMode = ChannelMode.MONO) {
    super(id, channelMode);

    this.connectInternalNodes();
  }

  protected connectInternalNodes() {
    Tone.connectSeries(this.inputNode, this.outputNode);
  }

  protected updateChannelMode(mode: ChannelMode): void {}

  get regionManager(): AudioRegionManager {
    return this.inputNode;
  }
}