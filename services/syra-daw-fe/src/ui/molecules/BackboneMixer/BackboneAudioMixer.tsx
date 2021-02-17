import { useEffect } from 'react';
import useBackboneChannel from '../../../hooks/tone/BackboneMixer/useBackboneChannel';
import useRecorder from '../../../hooks/audio/useRecorder';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil';
import useConnectMidiWithInstrumentChannel from '../../../hooks/audio/useConnectMidiWithInstrumentChannel';
import { ChannelType } from '../../../types/Channel';

interface Props {
  channelId: string;
}

// This component does all the heavy lifting connecting channels, syncing recoil to tonejs, etc.. It doesn't render anything nor should it.
function BackboneAudioMixer({channelId}: Props) {
  const mixerChannelStrip = useBackboneChannel(channelId);

  const isMuted = useRecoilValue(channelStore.isMuted(channelId));
  const isArmed = useRecoilValue(channelStore.isArmed(channelId));
  const isSolo = useRecoilValue(channelStore.isSolo(channelId));
  const channelType = useRecoilValue(channelStore.type(channelId));
  const isInputMonitoringActive = useRecoilValue(channelStore.isInputMonitoringActive(channelId));
  const pluginIds = useRecoilValue(channelStore.pluginIds(channelId));
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const plugins = useRecoilValue(channelStore.findActivePluginsByIds(pluginIds));
  const [connect, disconnect] = useConnectMidiWithInstrumentChannel(channelId);

  useEffect(() => {
    // TODO: WE COULD PROBABLY JUST CREATE A INSTANCE LIKE Tone.Solo, BUT FOR MUTING. THIS WOULD SAVE US A REWIRING CALL.
    isMuted ? mixerChannelStrip.disconnect(soulInstance?.audioNode) : mixerChannelStrip.rewireAudio(plugins.map(plugin => plugin.audioNode), soulInstance?.audioNode);
  }, [isMuted, plugins, soulInstance, mixerChannelStrip]);

  useEffect(() => {
    (async () => {
      await mixerChannelStrip.updateArming(isArmed);
    })();
  }, [isArmed, mixerChannelStrip]);

  useEffect(() => {
    mixerChannelStrip.updateInputMonitoring(isInputMonitoringActive);
  }, [isInputMonitoringActive, mixerChannelStrip]);

  useEffect(() => {
    mixerChannelStrip.solo.set({ solo: isSolo });
  }, [isSolo, mixerChannelStrip]);

  useEffect(() => {
    mixerChannelStrip.disconnect(soulInstance?.audioNode);
    mixerChannelStrip.rewireAudio(plugins.map(plugin => plugin.audioNode), soulInstance?.audioNode)
  }, [soulInstance, plugins]);

  // TODO: THIS MIGHT CAUSE SOME TROUBLE BECAUSE THIS IS RUNNING FOR EVERY CHANNEL ON EVERY CHANNEL CHANGE. ALSO THIS IS NOT NEEDED FOR MIDI.
  useRecorder(channelId);

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
