import { ChannelMode, ChannelType } from "../../types/Channel";
import * as Tone from "tone";
import { AbstractRecordableChannel } from "./AbstractRecordableChannel";

export class InstrumentChannel extends AbstractRecordableChannel {
  protected inputNode: AudioWorkletNode | null = null;
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

  set instrument(node: AudioWorkletNode | null) {
    this.disconnectInternalNodes();

    this.inputNode = node;

    this.connectInternalNodes();
  }

  get instrument(): AudioWorkletNode | null {
    return this.inputNode;
  }
}