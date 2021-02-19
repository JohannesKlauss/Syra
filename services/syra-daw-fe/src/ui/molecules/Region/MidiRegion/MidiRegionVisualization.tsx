import React, { useContext, useMemo } from 'react';
import { Graphics } from 'pixi.js';
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { colorToHexNumber, determineTextColor } from '../../../../utils/color';
import { RegionContext } from '../../../../providers/RegionContext';
import { regionStore } from '../../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import useMidiRegionWidth from '../../../../hooks/ui/region/useMidiRegionWidth';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import useTicksToPixel from '../../../../hooks/tone/useTicksToPixel';
import { arrangeWindowStore } from "../../../../recoil/arrangeWindowStore";

interface PixiProps {
  x: number;
  y: number;
  width: number;
  height: number;
  backgroundColor: string;
}

const MidiNoteVis = PixiComponent<PixiProps, Graphics>('MidiNotesDisplay', {
  create: () => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, width, height, backgroundColor } = props;

    instance.clear();
    instance.beginFill(colorToHexNumber(determineTextColor(backgroundColor, true)));
    instance.drawRect(x, y, width - 1, height);
    instance.endFill();
  },
});

const MidiRegionVisualization: React.FC = () => {
  const regionId = useContext(RegionContext);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight) - 18; // Subtract the topBar of the region
  const midiNotesInsideBoundaries = useRecoilValue(regionStore.midiNotesInsideBoundaries(regionId));
  const width = useMidiRegionWidth();
  const color = useRegionColor(false);
  const ticksToPixel = useTicksToPixel();

  const {minMidiValue, maxMidiValue} = useMemo(() => {
    const midiValues = midiNotesInsideBoundaries.map(note => note.midi);

    return {
      minMidiValue: Math.min(...midiValues),
      maxMidiValue: Math.max(...midiValues),
    }
  }, [midiNotesInsideBoundaries]);

  let noteHeight = Math.min(trackHeight / (maxMidiValue + 1 - minMidiValue), trackHeight / 10);

  if (width < 0) {
    console.log('below 0');

    return null;
  }

  return (
    <Stage width={width} height={trackHeight} options={{transparent: true, resolution: 1}}>
      {midiNotesInsideBoundaries.map((note) => (
        <MidiNoteVis
          key={note.id}
          backgroundColor={color}
          height={noteHeight}
          width={ticksToPixel(note.durationTicks)}
          x={ticksToPixel(note.ticks)}
          y={noteHeight * (maxMidiValue - note.midi)}
        />
      ))}
    </Stage>
  );
};

export default MidiRegionVisualization;
