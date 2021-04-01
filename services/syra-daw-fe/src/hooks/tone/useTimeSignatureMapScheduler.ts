import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectStore } from '../../recoil/projectStore';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';
import { transportStore } from "../../recoil/transportStore";

export default function useTimeSignatureMapScheduler() {
  const setCurrentTimeSignature = useSetRecoilState(transportStore.currentTimeSignature);
  const timeSignatureMap = useRecoilValue(projectStore.timeSignatureMap);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  useEffect(() => {
    const changeAtQuarters = Object.keys(timeSignatureMap).map(parseFloat);

    changeAtQuarters.forEach(changeAtQuarter => {
      scheduleIds.current.push(transport.schedule(() => {
        const newTimeSignature = timeSignatureMap[changeAtQuarter];

        setCurrentTimeSignature(newTimeSignature);
      }, `${changeAtQuarter}:0:0`));
    });

    return () => {
      // eslint-disable-next-line
      scheduleIds.current.forEach(id => transport.clear(id));
    };
  }, [timeSignatureMap, scheduleIds, transport, setCurrentTimeSignature]);
}