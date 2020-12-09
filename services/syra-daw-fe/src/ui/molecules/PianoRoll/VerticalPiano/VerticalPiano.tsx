import { Box } from '@chakra-ui/react';
import React from "react";
import Piano from "../../Piano/Piano";

interface Props {

}

const VerticalPiano: React.FC<Props> = ({}) => {
  return (
      <Piano min={36} max={67} renderVertical={true}/>
  );
};

export default VerticalPiano;
