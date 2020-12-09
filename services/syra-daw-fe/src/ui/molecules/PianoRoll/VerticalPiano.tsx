import React from "react";
import Piano from "../Piano/Piano";

interface Props {

}

const VerticalPiano: React.FC<Props> = ({}) => {
  return (
      <Piano min={12} max={114} baseHeight={50} renderVertical/>
  );
};

export default VerticalPiano;
