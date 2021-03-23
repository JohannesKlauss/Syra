import { ChannelType } from "../../types/Channel";
import { AbstractRecordableChannel } from "./AbstractRecordableChannel";
import { MasterChannel } from "./MasterChannel";
import * as Tone from 'tone';

export class InstrumentChannel extends AbstractRecordableChannel {
  protected inputNode: AudioWorkletNode | undefined;
  protected outputNode = MasterChannel.getInstance().input as Tone.ToneAudioNode;

  protected type: ChannelType = ChannelType.INSTRUMENT;

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