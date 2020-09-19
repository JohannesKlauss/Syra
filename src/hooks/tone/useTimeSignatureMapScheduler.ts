import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectStore } from '../../recoil/projectStore';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';

export default function useTimeSignatureMapScheduler() {
  const setCurrentTimeSignature = useSetRecoilState(projectStore.currentTimeSignature);
  const timeSignatureMap = useRecoilValue(projectStore.timeSignatureMap);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  useEffect(() => {
    const changeAtQuarters = Object.keys(timeSignatureMap).map(t => parseFloat(t));

    changeAtQuarters.forEach(changeAtQuarter => {
      scheduleIds.current.push(transport.schedule(() => {
        const newTimeSignature = timeSignatureMap[changeAtQuarter];

        setCurrentTimeSignature(newTimeSignature);
      }, `0:${changeAtQuarter}:0`));
    });

    return () => {
      scheduleIds.current.forEach(id => transport.clear(id));
    };
  }, [timeSignatureMap, scheduleIds, transport, setCurrentTimeSignature]);
}