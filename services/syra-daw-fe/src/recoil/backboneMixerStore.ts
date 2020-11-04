import { atomFamily, selectorFamily } from 'recoil';
import * as Tone from 'tone';
import { ChannelNode } from '../types/Channel';

const nodes = atomFamily<Map<string, any>, string>({
  key: 'backboneMixer/nodes',
  default: selectorFamily({
    key: 'backboneMixer/nodes/Default',
    get: channelId => () => {
      const map = new Map<string, any>();

      map.set(ChannelNode.CHANNEL_ID, channelId);

      return map;
    }
  }),
});

const audioIn = selectorFamily<Tone.UserMedia, string>({
  key: 'backboneMixer/audioIn',
  get: channelId => ({get}) => {
    const channelNodes = get(nodes(channelId));

    if (!channelNodes.has(ChannelNode.AUDIO_IN)) {
      channelNodes.set(ChannelNode.AUDIO_IN, new Tone.UserMedia());
    }

    return channelNodes.get(ChannelNode.AUDIO_IN);
  },
});

const players = selectorFamily<Tone.UserMedia, string>({
  key: 'backboneMixer/players',
  get: channelId => ({get}) => get(nodes(channelId)).get(ChannelNode.PLAYERS),
});

const merge = selectorFamily<Tone.UserMedia, string>({
  key: 'backboneMixer/merge',
  get: channelId => ({get}) => get(nodes(channelId)).get(ChannelNode.MERGE),
});

const channel = selectorFamily<Tone.UserMedia, string>({
  key: 'backboneMixer/channel',
  get: channelId => ({get}) => get(nodes(channelId)).get(ChannelNode.CHANNEL),
});

const meter = selectorFamily<Tone.UserMedia, string>({
  key: 'backboneMixer/meter',
  get: channelId => ({get}) => get(nodes(channelId)).get(ChannelNode.METER),
});

interface NodeState {
  audioIn: Tone.UserMedia,
  players: Tone.Players,
  merge: Tone.Merge,
  channel: Tone.Channel,
  meter: Tone.Meter,
}

const nodeState = selectorFamily<NodeState, string>({
  key: 'backboneMixer/nodeState',
  get: channelId => ({get}) => {
    const channelNodes = get(nodes(channelId));

    return {
      audioIn: channelNodes.get(ChannelNode.AUDIO_IN),
      players: channelNodes.get(ChannelNode.PLAYERS),
      merge: channelNodes.get(ChannelNode.MERGE),
      channel: channelNodes.get(ChannelNode.CHANNEL),
      meter: channelNodes.get(ChannelNode.METER),
    }
  }
});

export const backboneMixerStore = {
  audioIn,
  players,
  merge,
  channel,
  meter,
  nodeState,
};