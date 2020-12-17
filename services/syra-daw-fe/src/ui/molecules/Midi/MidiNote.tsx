import { Box } from '@chakra-ui/react';
import { Note } from '@tonejs/midi/dist/Note';
import React, { useContext } from "react";
import useVelocityColors from "../../../hooks/midi/useVelocityColors";
import { useRecoilValue } from "recoil";
import { gridStore } from "../../../recoil/gridStore";
import { ViewContext } from "../../../providers/ViewContext";

interface Props {
  note: Note;
}

const MidiNote: React.FC<Props> = ({note}) => {
  const { view } = useContext(ViewContext);
  const velocityColor = useVelocityColors();
  const pixelPerSecond = useRecoilValue(gridStore.pixelPerSecond(view));

  return (
    <Box bg={velocityColor(note.velocity)} pos={'absolute'} left={`${note.time * pixelPerSecond}px`} w={`${note.duration * pixelPerSecond}px`} h={'100%'}>

    </Box>
  );
};

export default MidiNote;
