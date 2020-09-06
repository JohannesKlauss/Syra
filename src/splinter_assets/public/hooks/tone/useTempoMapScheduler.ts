import { projectStore } from '../../recoil/projectStore';
import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';

export default function useTempoMapScheduler() {
  const setCurrentTempo = useSetRecoilState(projectStore.currentTempo);
  const tempoMap = useRecoilValue(projectStore.tempoMap);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  useEffect(() => {
    scheduleIds.current.forEach(id => transport.clear(id));

    Object.keys(tempoMap).map(t => parseFloat(t)).forEach(changeTime => {
      scheduleIds.current.push(transport.schedule(() => {
        transport.bpm.value = tempoMap[changeTime];
        setCurrentTempo(transport.bpm.value);
      }, changeTime));
    })
  }, [tempoMap, scheduleIds, transport, setCurrentTempo]);
}