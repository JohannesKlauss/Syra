import { useEffect, useRef } from 'react';
import { projectStore } from '../../recoil/projectStore';
import { useRecoilValue } from 'recoil';
import useToneJsTransport from './useToneJsTransport';
import * as Tone from 'tone';
import { getBeatCountForTransportSeconds } from '../../utils/time';
import { gridStore } from '../../recoil/gridStore';
import { View } from '../../types/View';

const oscBar = new Tone.Oscillator(1174.66).toDestination();
const oscBeat = new Tone.Oscillator(587.33).toDestination();

export default function useClick() {
  const playheadPosition = useRecoilValue(gridStore.playheadPosition(View.ARRANGE_WINDOW));
  const isClickMuted = useRecoilValue(projectStore.isClickMuted);
  const currentTimeSignature = useRecoilValue(projectStore.currentTimeSignature);
  const timeSignatureMap = useRecoilValue(projectStore.timeSignatureMap);
  const transport = useToneJsTransport();
  const beats = useRef(1);

  useEffect(() => {
    beats.current = getBeatCountForTransportSeconds(timeSignatureMap, transport.seconds);
  }, [playheadPosition, beats, timeSignatureMap, transport]);

  useEffect(() => {
    const id = transport.scheduleRepeat((time) => {
      if (!isClickMuted) {
        // Start of a new bar.
        if (beats.current % currentTimeSignature[0] === 1) {
          oscBar.start(time).stop(time + 0.05);
        } else {
          oscBeat.start(time).stop(time + 0.05);
        }
      }

      beats.current++;
    }, `${currentTimeSignature[1]}n`, 0);

    return () => {
      if (beats.current !== 1) {
        // The clear function comes after the time signature change. So the "new bar osc" already fired. We then set it to the second beat.
        beats.current = 2;
      }

      transport.clear(id);
    };
  }, [transport, isClickMuted, currentTimeSignature, beats]);
}