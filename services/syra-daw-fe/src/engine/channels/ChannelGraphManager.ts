import { AbstractChannel } from "./AbstractChannel";
import { ChannelMode, ChannelType } from "../../types/Channel";
import { channelFactory } from "../factory/channelFactory";
import { removeItemAtIndex } from "../../utils/recoil";

export class ChannelGraphManager {
  private nodes: AbstractChannel[] = [];

  private edges: any[] = [];

  constructor() {

  }

  async createChannel(id: string, channelType: ChannelType, channelMode: ChannelMode, label: string): Promise<void> {
    const channel = await (await channelFactory(id, channelType, channelMode))();

    if (channel === null) {
      throw new Error('Could not create channel!');
    }

    channel.label = label;

    this.nodes.push(channel);
  }

  removeChannel(id: string): void {
    const index = this.nodes.findIndex(node => node.id === id);

    this.nodes[index].dispose();

    this.nodes = removeItemAtIndex(this.nodes, this.nodes.findIndex(node => node.id === id));
  }

  getChannel(id: string) {
    console.log('Look for channel', id);
    console.log('channels in graph', this.nodes);

    return this.nodes.find(node => node.id === id);
  }

  updateConnections() {

  }
}