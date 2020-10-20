import React from "react";
import Benefit from "../../../atoms/LandingPage/Benefit/Benefit";
import { Flex } from "@chakra-ui/core";

interface Props {
  benefits: string[];
  py: number;
}

function Benefits({benefits, py}: Props) {
  return (
    <Flex justify={'space-between'} px={64} py={py}>
      {benefits.map((text, i) => (
        <Benefit text={text} key={i}/>
      ))}
    </Flex>
  );
}

export default Benefits;
