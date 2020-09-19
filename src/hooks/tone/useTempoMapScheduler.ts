import { projectStore } from '../../recoil/projectStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';

export default function useTempoMapScheduler() {
  const tempoMap = useRecoilValue(projectStore.tempoMap);
  const [currentTempoRamp, setCurrentTempoRamp] = useRecoilState(projectStore.currentTempoRamp);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  useEffect(() => {
    Object.keys(tempoMap).map(t => parseFloat(t)).forEach(changeAtSeconds => {
      scheduleIds.current.push(transport.schedule(() => {
        const newRamp = tempoMap[changeAtSeconds];

        setCurrentTempoRamp(newRamp);

        transport.bpm.value = newRamp(0);
      }, changeAtSeconds));
    });

    return () => {
      scheduleIds.current.forEach(id => transport.clear(id));
    }
  }, [tempoMap, scheduleIds, transport, setCurrentTempoRamp]);

  return typeof currentTempoRamp === 'function' ? currentTempoRamp(0) : currentTempoRamp;
}