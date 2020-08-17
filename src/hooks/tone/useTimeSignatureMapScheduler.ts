import { useRecoilValue, useSetRecoilState } from 'recoil/dist';
import { projectStore } from '../../recoil/projectStore';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';

export default function useTimeSignatureMapScheduler() {
  const setCurrentTimeSignature = useSetRecoilState(projectStore.currentTimeSignature);
  const timeSignatureMap = useRecoilValue(projectStore.timeSignatureMap);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  useEffect(() => {
    scheduleIds.current.forEach(id => transport.clear(id));

    Object.keys(timeSignatureMap).map(t => parseFloat(t)).forEach(changeTime => {
      scheduleIds.current.push(transport.schedule(() => {
        transport.timeSignature = timeSignatureMap[changeTime];
        setCurrentTimeSignature(timeSignatureMap[changeTime]);
      }, changeTime));
    })
  }, [timeSignatureMap, scheduleIds, transport, setCurrentTimeSignature]);
}