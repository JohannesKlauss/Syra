import { useRecoilCallback } from 'recoil';
import { createNewId } from '../../../utils/createNewId';
import { CHANNEL_ID_PREFIX } from '../../../const/ids';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelMode, ChannelType } from "../../../types/Channel";
import { channelColors } from '../../../utils/channelColors';
import useSyraEngine from "../../engine/useSyraEngine";
import { useToast } from "@chakra-ui/react";

export default function useCreateChannel() {
  const syraEngine = useSyraEngine();
  const toast = useToast();

  // The queueIndex state which file index of the dropped array is currently processed.
  // This is only useful on drop or import actions. TODO: CONSIDER MOVING THIS TO THE LAST SPOT
  return useRecoilCallback(
    ({ set, snapshot }) => async (
      type: ChannelType,
      queueIndex: number = 0,
      channelName?: string,
      channelId?: string,
    ) => {
      const newChannelId = channelId ?? createNewId(CHANNEL_ID_PREFIX);
      const channelIds = (await snapshot.getLoadable(channelStore.ids).contents) as string[];

      try {
        await syraEngine.channels.createChannel(newChannelId, type, ChannelMode.MONO, channelName ?? 'Unnamed Channel');
      } catch (e) {
        throw e;

        toast({
          title: 'Could not create channel!',
          description: 'An error occurred during channel creation',
          status: 'error',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });

        return;
      }

      set(channelStore.type(newChannelId), type);
      set(channelStore.selectedId, newChannelId);
      set(channelStore.isRecorderActive(newChannelId), type === ChannelType.AUDIO);
      set(channelStore.color(newChannelId), channelColors[(channelIds.length + queueIndex + 1) % channelColors.length]);

      if (channelName) {
        set(channelStore.name(newChannelId), channelName);
      }

      set(channelStore.ids, (currVal) => [...currVal, newChannelId]);
      set(channelStore.selectedId, newChannelId);

      return newChannelId;
    },
    [syraEngine],
  );
}