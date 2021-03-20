import { ChannelMode, ChannelType } from "../../types/Channel";
import { AbstractRecordableChannel } from "./AbstractRecordableChannel";
import { MasterChannel } from "./MasterChannel";

export class InstrumentChannel extends AbstractRecordableChannel {
  protected inputNode: AudioWorkletNode | undefined;
  protected outputNode = MasterChannel.getInstance().input as AudioNode;

  protected type: ChannelType = ChannelType.INSTRUMENT;

  constructor(id: string, channelMode: ChannelMode = ChannelMode.MONO) {
    super(id, channelMode);

    this.connectInternalNodes();
  }

  protected updateArming() {
  }

  protected updateInputMonitoring() {
  }

  set instrument(node: AudioWorkletNode | undefined) {
    this.disconnectInternalNodes();

    this.inputNode = node;

    this.connectInternalNodes();
  }

  get instrument(): AudioWorkletNode | undefined {
    return this.inputNode;
  }
}