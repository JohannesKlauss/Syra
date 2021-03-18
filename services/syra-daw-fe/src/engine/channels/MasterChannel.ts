import * as Tone from "tone";
import { ChannelMode, ChannelType } from "../../types/Channel";
import { AbstractChannel } from "./AbstractChannel";

export class MasterChannel extends AbstractChannel {
  protected inputNode = new Tone.Volume();
  protected outputNode = Tone.Destination;
  protected type: ChannelType = ChannelType.MASTER;

  private static instance: MasterChannel;

  private constructor(id: string, channelMode: ChannelMode = ChannelMode.STEREO) {
    super(id, channelMode);

    this.connectInternalNodes();
  }

  public static getInstance(): MasterChannel {
    if (!MasterChannel.instance) {
      MasterChannel.instance = new MasterChannel('MASTER_CHANNEL');
    }

    return MasterChannel.instance;
  }

  protected updateChannelMode(mode: ChannelMode): void {
    throw new Error('Cannot change channelMode of Master Channel!');
  }
}