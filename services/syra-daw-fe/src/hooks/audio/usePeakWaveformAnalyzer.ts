import { useRecoilValue } from "recoil";
import { regionStore } from "../../recoil/regionStore";
import { useEffect, useState } from "react";

export default function usePeakWaveformAnalyzer(regionId: string) {
  const [peaks, setPeaks] = useState<Uint8Array>();

  return peaks;
}