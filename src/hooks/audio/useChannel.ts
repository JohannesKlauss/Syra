import React, { useCallback, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { channelState, selectedChannelInstrument, selectedChannelPlugins } from '../../recoil/selectors/channel';
import useSoulInstrument from '../soul/useSoulInstrument';
import * as Tone from 'tone';
import useSoulPatch from '../soul/useSoulPatch';

export default function useChannel(id: string) {
  const [, setSelectedInstrument] = useRecoilState(selectedChannelInstrument(id));
  const [, setSelectedPlugins] = useRecoilState(selectedChannelPlugins(id));

  const onChangeInstrument = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedInstrument(event.target.value as string);
  }, [setSelectedInstrument]);

  const onChangePlugin = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedPlugins([event.target.value as string]);
  }, [setSelectedPlugins]);

  return {
    onChangePlugin,
    onChangeInstrument,
  }
}