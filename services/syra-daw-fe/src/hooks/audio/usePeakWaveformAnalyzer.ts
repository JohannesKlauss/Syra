import { analyzeAudio } from "../../utils/audio/audioAnalyzer";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../recoil/regionStore";
import { useEffect, useState } from "react";

export default function usePeakWaveformAnalyzer(regionId: string) {
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const [peaks, setPeaks] = useState<Uint8Array>();

  useEffect(() => {
    if (audioBuffer !== null) {
      (async () => {
        setPeaks(await analyzeAudio(audioBuffer));
      })();
    }
  }, [audioBuffer]);

  return peaks;
}