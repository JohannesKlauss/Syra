import React from 'react';
import * as Tone from 'tone';
import { ChannelNode } from '../types/Channel';
import { createNewId } from '../utils/createNewId';

// TODO: this is all very prototypal. refactor this as soon as we have a working version.
function mixerNodeFactory<T extends Tone.ToneAudioNode>(nodes: Map<string, Tone.ToneAudioNode>, nodeType: ChannelNode, ctor: { new(): T }): Tone.ToneAudioNode {
  if (!nodes.has(nodeType)) {
    nodes.set(nodeType, new ctor());
  }

  return nodes.get(nodeType)!;
}

export function instantiateMixer() {
  const channels = new Map<string, Map<string, any>>();

  const getNodesByChannelId = (channelId: string) => {
    if (!channels.has(channelId)) {
      channels.set(channelId, new Map());
      channels.get(channelId)!.set('_ID', createNewId('node-'));
    }

    return channels.get(channelId)!;
  }

  const channel = (channelId: string) => {
    const nodes = getNodesByChannelId(channelId);

    const retNodes = {
      _ID: nodes.get('_ID'),
      audioIn: mixerNodeFactory(nodes, ChannelNode.AUDIO_IN, Tone.UserMedia) as Tone.UserMedia,
      merge: mixerNodeFactory(nodes, ChannelNode.MERGE, Tone.Merge) as Tone.Merge,
      players: mixerNodeFactory(nodes, ChannelNode.PLAYERS, Tone.Players) as Tone.Players,
      channel: mixerNodeFactory(nodes, ChannelNode.CHANNEL, Tone.Channel) as Tone.Channel,
      rmsMeter: mixerNodeFactory(nodes, ChannelNode.METER, Tone.Meter) as Tone.Meter,
    };

    const disconnect = () => {
      Tone.disconnect(retNodes.audioIn);
      Tone.disconnect(retNodes.players);
      Tone.disconnect(retNodes.merge);
    };

    const rewireAudio = (plugins: AudioWorkletNode[]) => {
      disconnect();

      retNodes.audioIn.connect(retNodes.merge, 0, 0);
      retNodes.players.connect(retNodes.merge, 0, 1);

      Tone.connectSeries(retNodes.merge, ...plugins, retNodes.channel, retNodes.rmsMeter, Tone.Destination);
    };

    const updateArming = async (isArmed: boolean = false) => {
      try {
        if (isArmed) {
          await retNodes.audioIn.open();
        }
        else {
          retNodes.audioIn.close();
        }
      } catch(e) {
        console.error("Could not open Audio Input", e);
      }
    }

    return {
      ...retNodes,
      rewireAudio,
      disconnect,
      updateArming
    }
  }

  const add = channel;

  return {
    channelIds: () => channels.keys(),
    channel,
    add,
  }
}

// This context never updates anything react related. It just acts as an backbone connector to keep all the channels connected to tone.
// Where and when the updates happen is decided by the react channel components.
export const BackboneMixerContext = React.createContext(instantiateMixer());