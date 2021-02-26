import { useRecoilCallback } from "recoil";
import { channelStore } from "../../../recoil/channelStore";
import { createNewId } from "../../../utils/createNewId";
import { useContext } from "react";
import { ChannelContext } from "../../../providers/ChannelContext";

export default function useAddPlugin() {
  const contextChannelId = useContext(ChannelContext);

  return useRecoilCallback(({snapshot, set}) => () => {
    const channelIds = snapshot.getLoadable(channelStore.ids).contents as string[];

    const maxLength = channelIds.reduce(((previousValue, currentValue, currentIndex, array) => {
      const pluginIds = snapshot.getLoadable(channelStore.pluginIds(array[currentIndex])).contents as string[];

      return Math.max(previousValue, pluginIds.length);
    }), 0);

    channelIds.forEach(channelId => {
      const pluginIds = [...snapshot.getLoadable(channelStore.pluginIds(channelId)).contents as string[]];

      for (let i = pluginIds.length; i < maxLength + 1; i++) {
        pluginIds.push(createNewId(`${channelId}-plugin-`));
      }

      set(channelStore.pluginIds(channelId), pluginIds);
    });
  }, [contextChannelId]);
}