import React, { useMemo } from "react";
import PianoContainer from "./components/PianoContainer";
import KeyComponent from "./components/KeyComponent";
import { getAllMidiNumbersInRange, getNaturalKeyWidthRatio } from "../../../utils/keyboardMidiHelper";

interface Props {
  min: number;
  max: number;
  renderVertical?: boolean;
  baseHeight?: number;
}

const PianoSuspenseFallback: React.FC<Props> = ({renderVertical, min, max, baseHeight = 205}) => {
  const range = useMemo(() => ({first: min, last: max}), [min, max]);
  const naturalKeyWidth = useMemo(() => getNaturalKeyWidthRatio(range) * 100, [range]);
  const midis = useMemo(() => {
    const notes = getAllMidiNumbersInRange(range);

    if (renderVertical) {
      return notes.reverse();
    }

    return notes;
  }, [range, renderVertical]);

  return (
    <PianoContainer renderVertical={true}>
      {midis.map((note, i) => (
        <KeyComponent
          key={note}
          baseHeight={baseHeight}
          renderVertical={renderVertical}
          note={note}
          naturalKeyWidth={naturalKeyWidth}
          i={i}
          range={range}
          isMousePressed={false}
          onMouseDown={() => null}
          onMouseUp={() => null}
          triggerNoteEvent={() => null}
        />
      ))
      }
    </PianoContainer>
  );
};

export default PianoSuspenseFallback;
