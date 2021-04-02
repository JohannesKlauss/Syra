import React, { useContext, useMemo } from 'react';
import { Graphics } from 'pixi.js';
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { colorToHexNumber, determineTextColor } from '../../../../utils/color';
import { RegionContext } from '../../../../providers/RegionContext';
import { regionStore } from '../../../../recoil/regionStore';
import { useRecoilValue } from 'recoil';
import useRegionWidth from '../../../../hooks/ui/region/useRegionWidth';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import useTicksToPixel from '../../../../hooks/ui/useTicksToPixel';
import { arrangeWindowStore } from "../../../../recoil/arrangeWindowStore";
import { motion, useTransform } from "framer-motion";
import useSnapPixelValue from "../../../../hooks/ui/useSnapPixelValue";
import { ResizableBoxContext } from "../../../../providers/ResizableBoxContext";

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
  const offset = useRecoilValue(regionStore.offset(regionId));
  const width = useRegionWidth();
  const color = useRegionColor(false);
  const ticksToPixel = useTicksToPixel();
  const snapPixel = useSnapPixelValue();
  const { boxOffset } = useContext(ResizableBoxContext);
  const negativeX = useTransform(boxOffset, boxOffset => -snapPixel(boxOffset));

  const {minMidiValue, maxMidiValue} = useMemo(() => {
    const midiValues = midiNotesInsideBoundaries.map(note => note.midi);

    return {
      minMidiValue: Math.min(...midiValues),
      maxMidiValue: Math.max(...midiValues),
    }
  }, [midiNotesInsideBoundaries]);

  let noteHeight = Math.min(trackHeight / (maxMidiValue + 1 - minMidiValue), trackHeight / 10);

  if (width < 0) {
    return null;
  }

  return (
    <motion.div style={{ x: negativeX }}>
      <Stage width={width} height={trackHeight} options={{transparent: true, resolution: 1}}>
        {midiNotesInsideBoundaries.map((note) => (
          <MidiNoteVis
            key={note.id}
            backgroundColor={color}
            height={noteHeight}
            width={ticksToPixel(note.durationTicks)}
            x={ticksToPixel(note.ticks - offset)}
            y={noteHeight * (maxMidiValue - note.midi)}
          />
        ))}
      </Stage>
    </motion.div>
  );
};

export default MidiRegionVisualization;
