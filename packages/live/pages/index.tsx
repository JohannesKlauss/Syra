import { Button, useColorMode } from "@chakra-ui/core";
import React, { useEffect } from "react";
import { Airbnb } from "../ui/atoms/AirBnb";

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode();

  console.log("colorMode", colorMode);

  return (
    <>
      <Airbnb/>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
    </>
  )
}
