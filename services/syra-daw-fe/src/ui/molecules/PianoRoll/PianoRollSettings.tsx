import { Flex } from "@chakra-ui/react";
import React from "react";
import { View } from "../../../types/View";
import RulerSettings from "../Ruler/Settings/RulerSettings";
import RulerSnapSettings from "../Ruler/Settings/RulerSnapSettings";
import RulerZoomInOut from "../Ruler/Settings/RulerZoomInOut";
import RulerCycleSettings from "../Ruler/Settings/RulerCycleSettings";

interface Props {

}

const PianoRollSettings: React.FC<Props> = () => {
  return (
    <Flex w={'100%'} bg={'gray.800'}>
      <RulerSettings>
        <RulerSnapSettings view={View.PIANO_ROLL} baseSnapValue={1}/>
        <RulerZoomInOut view={View.PIANO_ROLL}/>
        <RulerCycleSettings/>
      </RulerSettings>
    </Flex>
  );
};

export default PianoRollSettings;
