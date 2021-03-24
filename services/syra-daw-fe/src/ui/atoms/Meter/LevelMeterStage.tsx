import { _ReactPixi, Stage } from "@inlet/react-pixi";
import React from "react";
import ContextBridge from "../../../providers/bridges/ContextBridge";
import { SyraEngineContext } from "../../../providers/SyraEngineContext";

const LevelMeterStage: React.FC<_ReactPixi.IStage> = ({children, ...props}) => {
  return (
    <ContextBridge
      Context={SyraEngineContext}
      render={(children) => <Stage {...props}>{children}</Stage>}
    >
      {children}
    </ContextBridge>
  );
};

export default LevelMeterStage;
