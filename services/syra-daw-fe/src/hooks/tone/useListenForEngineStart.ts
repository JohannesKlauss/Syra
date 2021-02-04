import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { projectStore } from "../../recoil/projectStore";
import useAudioContext from "../audio/useAudioContext";

export default function useListenForEngineStart() {
  const setIsEngineRunning = useSetRecoilState(projectStore.isEngineRunning);
  const ctx = useAudioContext();

  useEffect(() => {
    ctx.rawContext.onstatechange = () => {
      setTimeout(() => setIsEngineRunning(ctx.state === 'running'), 50);
    };
  }, [setIsEngineRunning, ctx]);
}