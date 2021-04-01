import { useRecoilCallback } from "recoil";
import { createNewId } from "../../../utils/createNewId";
import { CHANNEL_ID_PREFIX } from "../../../const/ids";
import { channelStore } from "../../../recoil/channelStore";
import { ChannelMode, ChannelType } from "../../../types/Channel";
import { channelColors } from "../../../utils/channelColors";
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
      channelMode: ChannelMode = ChannelMode.MONO,
      queueIndex: number = 0,
      channelName?: string,
      channelId?: string,
    ) => {
      const newChannelId = channelId ?? createNewId(CHANNEL_ID_PREFIX);
      const channelIds = snapshot.getLoadable(channelStore.ids).getValue();

      console.log('current ids', channelIds);
      console.log('add channelId', newChannelId);

      try {
        await syraEngine.channels.createChannel(newChannelId, type, channelMode, channelName ?? 'Unnamed Channel');
      } catch (e) {
        toast({
          title: 'Could not create channel!',
          description: 'An error occurred during channel creation',
          status: 'error',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });

        console.log('Could not create Channel', e);

        return;
      }

      set(channelStore.type(newChannelId), type);
      set(channelStore.mode(newChannelId), channelMode);
      set(channelStore.selectedId, newChannelId);
      set(channelStore.color(newChannelId), channelColors[(channelIds.length + queueIndex + 1) % channelColors.length]);

      if (channelName) {
        set(channelStore.name(newChannelId), channelName);
      }

      set(channelStore.ids, (currVal) => {
        console.log('NEW IDS', [...currVal, newChannelId]);

        return [...currVal, newChannelId];
      });
      set(channelStore.selectedId, newChannelId);

      return newChannelId;
    },
    [syraEngine, toast],
  );
}