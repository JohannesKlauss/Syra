/* Inspiration is taken from ritz078's piano implementation. https://github.com/ritz078/raaga/blob/master/components/Piano/Piano.tsx */

import React, {useMemo} from 'react';
import {
  getAllMidiNumbersInRange,
  getNaturalKeyWidthRatio,
} from '../../../utils/keyboardMidiHelper';
import {useRecoilValue} from 'recoil';
import {keyboardMidiStore} from '../../../recoil/keyboardMidiStore';
import useConnectPianoRollToSelectedChannel from '../../../hooks/midi/useConnectPianoRollToSelectedChannel';
import PianoContainer from './components/PianoContainer';
import KeyComponent from './components/KeyComponent';

interface Props {
  min: number;
  max: number;
  renderVertical?: boolean;
  baseHeight?: number;
}

const Piano = ({renderVertical, min, max, baseHeight = 205}: Props) => {
  const activeMidis = useRecoilValue(keyboardMidiStore.activeKeyboardMidiNotes);
  const onNote = useConnectPianoRollToSelectedChannel();
  const range = useMemo(() => ({first: min, last: max}), [min, max]);
  const naturalKeyWidth = useMemo(() => getNaturalKeyWidthRatio(range) * 100, [range]);
  let midis = useMemo(() => getAllMidiNumbersInRange(range), [range]);

  if (renderVertical) {
    midis = midis.reverse();
  }

  return (
    <PianoContainer renderVertical={renderVertical}>
      {midis.map((note, i) => (
        <KeyComponent
          isActive={activeMidis.includes(note)}
          key={note}
          baseHeight={baseHeight}
          renderVertical={renderVertical}
          note={note}
          naturalKeyWidth={naturalKeyWidth}
          i={i}
          range={range}
          onNote={onNote}
        />
      ))
      }
    </PianoContainer>
  );
};

Piano.whyDidYouRender = true;

export default Piano;
