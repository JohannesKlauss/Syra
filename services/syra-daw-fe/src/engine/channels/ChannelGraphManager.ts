import { AbstractChannel } from './AbstractChannel';
import { ChannelMode, ChannelType } from '../../types/Channel';
import { channelFactory } from '../factory/channelFactory';
import { removeItemAtIndex } from '../../utils/recoil';
import { MasterChannel } from "./MasterChannel";

export const ChannelGraphManager = () => {
  let nodes: AbstractChannel[] = [MasterChannel.getInstance()];

  return {
    createChannel: (
      id: string,
      channelType: ChannelType,
      channelMode: ChannelMode,
      label: string,
    ): AbstractChannel => {
      if (nodes.findIndex(node => node.id === id) > -1) {
        return nodes[nodes.findIndex(node => node.id === id)];
      }

      const channel = channelFactory(id, channelType, channelMode);

      if (channel === null) {
        throw new Error('Could not create channel!');
      }

      channel.label = label;

      nodes.push(channel);

      return channel;
    },
    removeChannel: (id: string): void => {
      const index = nodes.findIndex((node) => node.id === id);

      nodes[index].dispose();

      nodes = removeItemAtIndex(
        nodes,
        nodes.findIndex((node) => node.id === id),
      );
    },
    getChannel: (id: string) => nodes.find((node) => node.id === id),
  }
};
