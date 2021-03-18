import { AbstractChannel } from './AbstractChannel';
import { ChannelMode, ChannelType } from '../../types/Channel';
import { channelFactory } from '../factory/channelFactory';
import { removeItemAtIndex } from '../../utils/recoil';

export const ChannelGraphManager = () => {
  let nodes: AbstractChannel[] = [];
  const edges: any[] = [];

  return {
    createChannel: async (
      id: string,
      channelType: ChannelType,
      channelMode: ChannelMode,
      label: string,
    ): Promise<void> => {
      const channel = await channelFactory(id, channelType, channelMode);

      if (channel === null) {
        throw new Error('Could not create channel!');
      }

      channel.label = label;

      nodes.push(channel);
    },
    removeChannel: (id: string): void => {
      const index = nodes.findIndex((node) => node.id === id);

      nodes[index].dispose();

      nodes = removeItemAtIndex(
        nodes,
        nodes.findIndex((node) => node.id === id),
      );
    },
    getChannel: (id: string) => {
      return nodes.find((node) => node.id === id);
    },
  }
};
