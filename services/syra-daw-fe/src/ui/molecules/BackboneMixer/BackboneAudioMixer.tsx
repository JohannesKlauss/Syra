import { useEffect } from 'react';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil';
import useConnectMidiWithInstrumentChannel from '../../../hooks/audio/useConnectMidiWithInstrumentChannel';
import { ChannelType } from '../../../types/Channel';
import useSyncTransportToSoul from "../../../hooks/soul/useSyncTransportToSoul";
import useRecordExternalMidi from "../../../hooks/recoil/region/useRecordExternalMidi";
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";
import { AbstractRecordableChannel } from "../../../engine/channels/AbstractRecordableChannel";

interface Props {
  channelId: string;
}

// This component does all the heavy lifting connecting channels, syncing recoil to tonejs, etc.. It doesn't render anything nor should it.
function BackboneAudioMixer({channelId}: Props) {
  const channel = useSyraEngineChannel(channelId) as AbstractRecordableChannel;

  const isMuted = useRecoilValue(channelStore.isMuted(channelId));
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const isSolo = useRecoilValue(channelStore.isSolo(channelId));
  const channelType = useRecoilValue(channelStore.type(channelId));
  const isInputMonitoringActive = useRecoilValue(channelStore.isInputMonitoringActive(channelId));
  const pluginIds = useRecoilValue(channelStore.pluginIds(channelId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const plugins = useRecoilValue(channelStore.findActivePluginsByIds(pluginIds));
  const [connect, disconnect] = useConnectMidiWithInstrumentChannel(channelId);


  useSyncTransportToSoul();
  useRecordExternalMidi();

  useEffect(() => {
    channel.mute = isMuted;
  }, [isMuted, channel]);

  useEffect(() => {
    channel.isArmed = isArmed;
  }, [isArmed, channel]);

  useEffect(() => {
    channel.isInputMonitoringActive = isInputMonitoringActive;
  }, [isInputMonitoringActive, channel]);

  useEffect(() => {
    channel.solo = isSolo;
  }, [isSolo, channel]);

  useEffect(() => {
    if (channelType === ChannelType.INSTRUMENT) {
      connect();

      return () => {
        disconnect();
      }
    }
  }, [soulInstance, channelType, connect, disconnect])

  return null;
}

export default BackboneAudioMixer;
