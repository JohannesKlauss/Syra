import { ChannelMode, ChannelType } from "../../types/Channel";
import * as Tone from "tone";
import { AbstractRecordableChannel } from "./AbstractRecordableChannel";

export class InstrumentChannel extends AbstractRecordableChannel {
  protected inputNode: AudioWorkletNode | undefined;
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

  set instrument(node: AudioWorkletNode | undefined) {
    this.disconnectInternalNodes();

    this.inputNode = node;

    this.connectInternalNodes();
  }

  get instrument(): AudioWorkletNode | undefined {
    return this.inputNode;
  }
}