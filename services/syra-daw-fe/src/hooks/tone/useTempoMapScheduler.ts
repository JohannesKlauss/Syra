import { projectStore } from '../../recoil/projectStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';

export default function useTempoMapScheduler() {
  const tempoMap = useRecoilValue(projectStore.tempoMap);
  const [currentTempo, setCurrentTempo] = useRecoilState(projectStore.currentTempo);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  useEffect(() => {
    Object.keys(tempoMap).map(parseFloat).forEach(changeAtQuarter => {
      scheduleIds.current.push(transport.schedule(() => {
        const newTempo = tempoMap[changeAtQuarter];

        setCurrentTempo(newTempo);

        transport.bpm.value = newTempo;
      }, `${changeAtQuarter}:0:0`));
    });

    return () => {
      scheduleIds.current.forEach(id => transport.clear(id));
    }
  }, [tempoMap, scheduleIds, transport, setCurrentTempo]);

  return currentTempo;
}