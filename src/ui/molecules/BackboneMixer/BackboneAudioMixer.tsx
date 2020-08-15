import React, { useEffect } from 'react';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import useRecorder from '../../../hooks/audio/useRecorder';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil/dist';

interface Props {
  channelId: string
}

// This component does all the heavy lifting connecting channels, syncing recoil to tonejs, etc.. It doesn't render anything nor should it.
function BackboneAudioMixer({channelId}: Props) {
  const mixerChannelStrip = useBackboneChannel(channelId);

  const isMuted = useRecoilValue(channelStore.isMuted(channelId));
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const isSolo = useRecoilValue(channelStore.isSolo(channelId));
  const isInputMonitoringActive = useRecoilValue(channelStore.isInputMonitoringActive(channelId));
  const pluginIds = useRecoilValue(channelStore.pluginIds(channelId));
  const plugins = useRecoilValue(channelStore.findActivePluginsByIds(pluginIds));

  useEffect(() => {
    console.log('isMuted', isMuted);

    isMuted ? mixerChannelStrip.disconnect() : mixerChannelStrip.rewireAudio(plugins.map(plugin => plugin.audioNode));
  }, [isMuted, plugins]);

  useEffect(() => {
    (async () => {
      await mixerChannelStrip.updateArming(isArmed);
    })();
  }, [isArmed]);

  useEffect(() => {
    mixerChannelStrip.updateInputMonitoring(isInputMonitoringActive);
  }, [isInputMonitoringActive]);

  useEffect(() => {
    mixerChannelStrip.channel.set({ solo: isSolo });
  }, [isSolo]);

  useRecorder(channelId);

  return null;
}

export default BackboneAudioMixer;
