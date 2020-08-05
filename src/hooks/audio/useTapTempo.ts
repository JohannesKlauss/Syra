/** Inspiration for this is taken from https://www.nayuki.io/res/tap-to-measure-tempo-javascript/tap-to-measure-tempo.js */
import { useRef, useState } from 'react';

function calcTapTempo(defaultTempo: number = 120) {
  let startTime: number;
  let beatTimes: number[] = [];
  let xsum  = 0;
  let xxsum = 0;
  let ysum  = 0;
  let yysum = 0;
  let xysum = 0;
  
  function reset (currTime: number) {
    startTime = currTime;
    beatTimes = [];
    xsum  = 0;
    xxsum = 0;
    ysum  = 0;
    yysum = 0;
    xysum = 0;
  }

  function countBeat(currTime: number) {
    // Reset tap tempo when there wasn't any input for 2 seconds.
    if (startTime == undefined || currTime - startTime - beatTimes[beatTimes.length - 1] > 2000) {
      reset(currTime);
    }

    const x = beatTimes.length;
    const y = currTime - startTime;

    beatTimes.push(y);
    const beatCount = beatTimes.length;

    // Regression cumulative variables
    xsum  += x;
    xxsum += x * x;
    ysum  += y;
    yysum += y * y;
    xysum += x * y;

    if (beatCount >= 2) {
      const xx = beatCount * xxsum - xsum * xsum;
      const a = (beatCount * xysum - xsum * ysum) / xx;  // Slope

      return parseFloat((60000 / a).toFixed(3));
    }

    return defaultTempo; // Return the default tempo.
  }

  return () => countBeat(Date.now());
}

export default function useTapTempo(defaultTempo: number = 120) {
  const calcTempo = useRef(calcTapTempo(defaultTempo));
  const [tappedTempo, setTappedTempo] = useState(defaultTempo);

  return {tap: () => setTappedTempo(calcTempo.current()), tappedTempo };
}