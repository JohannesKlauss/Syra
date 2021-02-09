import * as React from "react";
import { BackboneMixerContext, instantiateMixer } from "../../src/providers/BackboneMixerContext";

export default function sbWithBackboneMixer(Story) {
  return (
    <BackboneMixerContext.Provider value={instantiateMixer()}>
      <Story/>
    </BackboneMixerContext.Provider>
  )
}