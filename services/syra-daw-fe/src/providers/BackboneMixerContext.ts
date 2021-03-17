import React from 'react';
import * as Tone from 'tone';
import { ChannelNode } from '../types/Channel';
import { createNewId } from '../utils/createNewId';

// TODO: this is all very prototypal. refactor this as soon as we have a working version.
function mixerNodeFactory<T extends Tone.ToneAudioNode>(
  nodes: Map<string, Tone.ToneAudioNode>,
  nodeType: ChannelNode,
  ctor: { new (params?: Record<string, any>): T },
  params?: Record<string, any>,
): Tone.ToneAudioNode {
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

async function audioInFactory(nodes: Map<string, any>) {
  if (!nodes.has('audioIn') || nodes.get('audioIn') === null) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});

      nodes.set('audioIn', Tone.getContext().createMediaStreamSource(stream));
    } catch (e) {
      nodes.set('audioIn', null);
    }
  }

  return nodes.get('audioIn') as MediaStreamAudioSourceNode | null;
}

interface RecorderMetaInfo {
  transportStartedAt: number;
  transportStoppedAt: number;
}

async function audioNodesFactory(nodes: Map<string, any>) {
  return {
    _ID: nodes.get('_ID'),
    audioIn: await audioInFactory(nodes) as MediaStreamAudioSourceNode,
    merge: mixerNodeFactory(nodes, ChannelNode.MERGE, Tone.Merge) as Tone.Merge,
    players: mixerNodeFactory(nodes, ChannelNode.PLAYERS, Tone.Players) as Tone.Players,
    volume: mixerNodeFactory(nodes, ChannelNode.VOLUME, Tone.Volume) as Tone.Volume,
    pan: mixerNodeFactory(nodes, ChannelNode.PAN, Tone.Panner, { channelCount: 2 }) as Tone.Panner,
    solo: mixerNodeFactory(nodes, ChannelNode.SOLO, Tone.Solo) as Tone.Solo,
    rmsMeter: mixerNodeFactory(nodes, ChannelNode.METER, Tone.Meter, { smoothing: 0.9 }) as Tone.Meter,
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
  };

  const channel = async (channelId: string) => {
    const nodes = getNodesByChannelId(channelId);

    const retNodes = await audioNodesFactory(nodes);

    const disconnect = (virtualInstrumentNode?: AudioWorkletNode) => {
      if (virtualInstrumentNode) {
        Tone.disconnect(virtualInstrumentNode);
      }

      Tone.disconnect(retNodes.audioIn);
      Tone.disconnect(retNodes.players);
    };

    const rewireAudio = (plugins: AudioWorkletNode[], virtualInstrumentNode?: AudioWorkletNode) => {
      if (retNodes.recorder && !virtualInstrumentNode) {
        Tone.connectSeries(retNodes.audioIn, retNodes.recorder);
      }

      disconnect(virtualInstrumentNode);

      if (virtualInstrumentNode) {
        Tone.connectSeries(
          virtualInstrumentNode,
          ...plugins,
          retNodes.volume,
          retNodes.rmsMeter,
          //retNodes.pan,
          retNodes.solo,
          Tone.Destination,
        );
      } else {
        Tone.connectSeries(
          retNodes.players,
          ...plugins,
          retNodes.volume,
          retNodes.rmsMeter,
          //retNodes.pan,
          retNodes.solo,
          Tone.Destination,
        );
      }
    };

    return {
      ...retNodes,
      rewireAudio,
      disconnect,
    };
  };

  const add = channel;

  const values: Readonly<RecorderMetaInfo> = recorderMetaInfo;
  const setTransportStart = (contextTime: number) => (recorderMetaInfo.transportStartedAt = contextTime);
  const setTransportStop = (contextTime: number) => (recorderMetaInfo.transportStoppedAt = contextTime);

  return {
    channelIds: () => channels.keys(),
    channel,
    add,
    meta: {
      values,
      setTransportStart,
      setTransportStop,
    },
  };
}

// This context never updates anything react related. It just acts as an backbone connector to keep all the channels connected to tone.
// Where and when the updates happen is decided by the react channel components.
export const BackboneMixerContext = React.createContext(instantiateMixer());
