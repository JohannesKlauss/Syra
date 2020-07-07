import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import {
  selectedChannelPlugins,
} from '../../recoil/selectors/channel';
import { createSoulInstance } from '../../soul/createSoulInstance';
import { availableSoulPlugins } from '../../recoil/atoms/soulPatches';

export default function useChannel(id: string) {
  const availablePlugins = useRecoilValue(availableSoulPlugins);
  const [selectedPlugins, setSelectedPlugins] = useRecoilState(selectedChannelPlugins(id));

  /*const onChangePlugin = useCallback(async (event: React.ChangeEvent<{ value: unknown }>) => {
    const plugin = availablePlugins.find(plugin => plugin.UID === event.target.value as string);

    console.log('selectedPlugins', selectedPlugins);
    console.log('new', event.target.value);

    const newPlugin: string[] = (event.target.value as string[]).filter(val => val.length > 0 && selectedPlugins.find(instance => instance.soulPatch.descriptor.description.UID === val) === undefined);

    if (newPlugin.length !== 1) {
      throw new Error('You are trying to add zero or more than one plugin which is not possible.');
    }

    const newInstance = await createSoulInstance(newPlugin[0]);

    setSelectedPlugins([...selectedPlugins, newInstance]);
  }, [selectedPlugins, setSelectedPlugins, availablePlugins]);*/


}