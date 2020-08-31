import React from 'react';
import * as Tone from 'tone';
import { ChannelNode } from '../types/Channel';
import { createNewId } from '../utils/createNewId';

// TODO: this is all very prototypal. refactor this as soon as we have a working version.
function mixerNodeFactory<T extends Tone.ToneAudioNode>(nodes: Map<string, Tone.ToneAudioNode>, nodeType: ChannelNode, ctor: { new(params?: Record<string, any>): T }, params?: Record<string, any>): Tone.ToneAudioNode {
  if (!nodes.has(nodeType)) {
    nodes.set(nodeType, new ctor(params));
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

interface RecorderMetaInfo {
  transportStartedAt: number;
  transportStoppedAt: number;
}

function audioNodesFactory(nodes: Map<string, any>) {
  return {
    _ID: nodes.get('_ID'),
    audioIn: mixerNodeFactory(nodes, ChannelNode.AUDIO_IN, Tone.UserMedia) as Tone.UserMedia,
    merge: mixerNodeFactory(nodes, ChannelNode.MERGE, Tone.Merge) as Tone.Merge,
    players: mixerNodeFactory(nodes, ChannelNode.PLAYERS, Tone.Players) as Tone.Players,
    volume: mixerNodeFactory(nodes, ChannelNode.VOLUME, Tone.Volume) as Tone.Volume,
    pan: mixerNodeFactory(nodes, ChannelNode.PAN, Tone.Panner) as Tone.Panner,
    channel: mixerNodeFactory(nodes, ChannelNode.CHANNEL, Tone.Channel) as Tone.Channel,
    rmsMeter: mixerNodeFactory(nodes, ChannelNode.METER, Tone.Meter, {smoothing: 0.9}) as Tone.Meter,
    recorder: recorderFactory(nodes),
  };
}

export function instantiateMixer() {
  const channels = new Map<string, Map<string, any>>();
  const recorderMetaInfo: RecorderMetaInfo = {
    transportStartedAt: -1,
    transportStoppedAt: -1,
  };

  const getNodesByChannelId = (channelId: string) => {
    if (!channels.has(channelId)) {
      channels.set(channelId, new Map());
      channels.get(channelId)!.set('_ID', createNewId('node-'));
    }

    return channels.get(channelId)!;
  }

  const channel = (channelId: string) => {
    const nodes = getNodesByChannelId(channelId);

    const retNodes = audioNodesFactory(nodes);

    const disconnect = () => {
      Tone.disconnect(retNodes.audioIn);
      Tone.disconnect(retNodes.players);
    };

    const rewireAudio = (plugins: AudioWorkletNode[]) => {
      if (retNodes.recorder) {
        Tone.connectSeries(retNodes.audioIn, retNodes.recorder);
      }

      Tone.connectSeries(retNodes.players, ...plugins, retNodes.volume, retNodes.rmsMeter, retNodes.pan, Tone.Destination);
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

    const updateInputMonitoring = (isInputMonitoringActive: boolean) => {
      if (retNodes.recorder) {
        if (isInputMonitoringActive) {
          Tone.connect(retNodes.recorder, Tone.Destination);
        }
        else {
          Tone.disconnect(retNodes.recorder);
        }
      }
    };

    return {
      ...retNodes,
      rewireAudio,
      disconnect,
      updateArming,
      updateInputMonitoring,
    }
  }

  const add = channel;

  const values: Readonly<RecorderMetaInfo> = recorderMetaInfo;
  const setTransportStart = (contextTime: number) => recorderMetaInfo.transportStartedAt = contextTime;
  const setTransportStop = (contextTime: number) => recorderMetaInfo.transportStoppedAt = contextTime;

  return {
    channelIds: () => channels.keys(),
    channel,
    add,
    meta: {
      values,
      setTransportStart,
      setTransportStop,
    }
  }
}

// This context never updates anything react related. It just acts as an backbone connector to keep all the channels connected to tone.
// Where and when the updates happen is decided by the react channel components.
export const BackboneMixerContext = React.createContext(instantiateMixer());