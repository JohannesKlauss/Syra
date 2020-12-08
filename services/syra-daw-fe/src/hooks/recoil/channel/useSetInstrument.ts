import { createSoulInstance } from '../../../soul/createSoulInstance';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { soulPluginStore } from '../../../recoil/soulPluginStore';
import { channelStore } from '../../../recoil/channelStore';

export default function useSetInstrument() {
  const patchList = useRecoilValue(soulPluginStore.availableSoulInstruments);

  return useRecoilCallback(
    ({ set }) => async (channelId: string, patchUID: string) => {
      const patch = patchList.find((patch) => patch.UID === patchUID);

      if (patch) {
        set(channelStore.soulInstance(channelId), await createSoulInstance(patch, true));
      }
    },
    [patchList],
  );
}
