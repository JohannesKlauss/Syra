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

function recorderFactory(nodes: Map<string, any>): AudioWorkletNode | null {
  if (!nodes.has('recorder') || nodes.get('recorder') === null) {
    try {
      nodes.set('recorder', Tone.getContext().createAudioWorkletNode('recorder-worklet'));
    } catch (e) {
      nodes.set('recorder', null);
    }
  }

  return nodes.get('recorder') as AudioWorkletNode | null;
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
      recorder: recorderFactory(nodes),
    };

    const disconnect = () => {
      Tone.disconnect(retNodes.audioIn);
      Tone.disconnect(retNodes.players);
    };

    const rewireAudio = (plugins: AudioWorkletNode[]) => {
      console.log('rewire');

      disconnect();

      const split = new Tone.Split(2);

      if (retNodes.recorder) {
        Tone.connectSeries(retNodes.audioIn, retNodes.recorder);
      } else {
        // retNodes.audioIn.connect(Tone.Destination);
      }

      Tone.connect(retNodes.players, Tone.Destination);
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