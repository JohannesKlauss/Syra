import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectStore } from '../../recoil/projectStore';
import { useEffect, useRef } from 'react';
import useToneJsTransport from './useToneJsTransport';

export default function useTimeSignatureMapScheduler() {
  const setCurrentTimeSignature = useSetRecoilState(projectStore.currentTimeSignature);
  const timeSignatureMap = useRecoilValue(projectStore.timeSignatureMap);
  const scheduleIds = useRef<number[]>([]);
  const transport = useToneJsTransport();

  let nextChange = 0;

  useEffect(() => {
    const changeAtBars = Object.keys(timeSignatureMap).map(t => parseFloat(t));

    transport.timeSignature = timeSignatureMap[0]; // TODO: THIS IS ONLY TRUE IF PLAYHEAD IS AT ZERO.

    if (changeAtBars.length === 1) {
      return;
    }

    function quarterNotesUntilNextChange(timeSignature: [number, number], bars: number) {
      const quarterNotePerBar = timeSignature[0] / (timeSignature[1] / 4);

      return quarterNotePerBar * bars;
    }

    function scheduleNextTimeSignatureChange(lastIndex: number) {
      const changeAtBar = changeAtBars[lastIndex];
      const timeSignature = timeSignatureMap[changeAtBar];

      nextChange += quarterNotesUntilNextChange(timeSignature, changeAtBars[lastIndex + 1] - changeAtBar);

      scheduleIds.current.push(transport.schedule(() => {
        const newTimeSignature = timeSignatureMap[changeAtBars[lastIndex + 1]];

        transport.timeSignature = newTimeSignature;
        setCurrentTimeSignature(newTimeSignature);

        if (lastIndex + 2 < changeAtBars.length) {
          scheduleNextTimeSignatureChange(lastIndex + 1);
        }
      }, `0:${nextChange}:0`));
    }

    scheduleNextTimeSignatureChange(0);

    return () => {
      scheduleIds.current.forEach(id => transport.clear(id));
    };
  }, [timeSignatureMap, scheduleIds, transport, setCurrentTimeSignature]);
}