import { useCallback, useContext, useEffect } from "react";
import * as Tone from "tone";
import useToneJsTransport from "../tone/useToneJsTransport";
import { useRecoilValue } from "recoil";
import { transportStore } from "../../recoil/transportStore";
import { channelStore } from "../../recoil/channelStore";
import { ChannelContext } from "../../providers/ChannelContext";
import usePanic from "../midi/usePanic";

export default function useSyncTransportToSoul() {
  const channelId = useContext(ChannelContext);
  const soulInstance = useRecoilValue(channelStore.soulInstance(channelId));
  const transport = useToneJsTransport();
  const transportSeconds = useRecoilValue(transportStore.seconds);
  const panic = usePanic(soulInstance?.audioNode.port);

  const triggerTransportOffset = useCallback(() => {
    soulInstance?.audioNode.parameters.get('transportOffsetInSamples')?.setValueAtTime(
      Math.floor(transportSeconds * Tone.getContext().sampleRate), Tone.getContext().currentTime
    );
  }, [soulInstance, transportSeconds]);

  const kill = useCallback(() => {
    soulInstance?.audioNode.parameters.get('transportOffsetInSamples')?.setValueAtTime(-1, Tone.getContext().currentTime);
    panic();
  }, [panic, soulInstance]);

  // Sync effects to transport start and stop
  useEffect(() => {
    transport.on('start', triggerTransportOffset);
    transport.on('stop', kill);

    return () => {
      transport.off('start', triggerTransportOffset);
      transport.off('stop', kill);
    }
  }, [transport, soulInstance, triggerTransportOffset]);
}