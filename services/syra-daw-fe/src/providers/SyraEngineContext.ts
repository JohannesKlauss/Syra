import React from "react";
import { createSyraEngineInstance } from "../engine/SyraEngine";

export const SyraEngineContext = React.createContext(createSyraEngineInstance());