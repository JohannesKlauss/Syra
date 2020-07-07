import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil/dist';
import {
  selectedChannelInstrument,
  selectedChannelPlugins,
} from '../../recoil/selectors/channel';
import { createSoulInstance } from '../../soul/createSoulInstance';

export default function useChannel(id: string) {
  const [, setSelectedInstrument] = useRecoilState(selectedChannelInstrument(id));
  const [, setSelectedPlugins] = useRecoilState(selectedChannelPlugins(id));

  const onChangeInstrument = useCallback(async (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedInstrument(await createSoulInstance(event.target.value as string, true));
  }, [setSelectedInstrument]);

  const onChangePlugin = useCallback(async (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedPlugins = (event.target.value as string[]).filter(val => val.length > 0);

    const soulInstances = await selectedPlugins.map(async (plugin) => await createSoulInstance(plugin));

    Promise.all(soulInstances).then(result => setSelectedPlugins(result));
  }, [setSelectedPlugins]);

  return {
    onChangePlugin,
    onChangeInstrument,
  }
}