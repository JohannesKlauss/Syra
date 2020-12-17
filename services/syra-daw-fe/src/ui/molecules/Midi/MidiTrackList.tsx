import { Box } from '@chakra-ui/react';
import React, { useContext } from "react";
import MidiTrack from "./MidiTrack";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { useRecoilValue } from "recoil";
import { gridStore } from "../../../recoil/gridStore";
import { ViewContext } from "../../../providers/ViewContext";

interface Props {
  min: number;
  max: number;
}

const Row = ({ index, data }: ListChildComponentProps) => (
  <MidiTrack note={data[index]} isEven={index % 2 === 0}/>
);

const MidiTrackList: React.FC<Props> = ({min, max}) => {
  const { view, viewRef } = useContext(ViewContext);
  const totalWidth = useRecoilValue(gridStore.totalWidth(view));

  console.log('height', viewRef?.current?.clientHeight);

  return (
    <Box cursor={'url("/icons/cursor/pencil.svg") 0 24, auto'}>
      <FixedSizeList
        height={viewRef?.current?.clientHeight ?? 0}
        itemCount={(max - min) + 1}
        itemSize={14}
        itemData={Array.from({length: (max - min) + 1}, (_, i) => max - i)}
        width={totalWidth}
      >
        {Row}
      </FixedSizeList>
    </Box>
  );
};

export default MidiTrackList;
