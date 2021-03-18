import { useContext } from "react";
import { SyraEngineContext } from "../../providers/SyraEngineContext";

export default function useSyraEngine() {
  return useContext(SyraEngineContext);
}
