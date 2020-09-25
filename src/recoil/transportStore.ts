import { atom, selector, selectorFamily } from 'recoil';
import * as Tone from 'tone';
import { PlayButtonMode } from '../types/PlayButtonMode';
import { secondsToSamples } from '../utils/time';
import { Bar } from '../types/Ui';
import { projectStore } from './projectStore';
import { getSortedKeysOfEventMap } from '../utils/eventMap';
import { arrangeWindowStore } from './arrangeWindowStore';
import { getToneJsPositionInQuarter } from '../utils/tonejs';

// Internal atoms are just used to sync everything with the ToneJs transport itself. Never expose them to the rest of the app.

const internalSeconds = atom({
  key: 'transport/internalSeconds',
  default: Tone.getTransport().seconds,
});

const seconds = selector<number>({
  key: 'transport/seconds',
  get: ({get}) => get(internalSeconds),
  set: ({set}, newValue) => {
    Tone.getTransport().seconds = newValue as number;
    set(internalSeconds, newValue as number);
    set(internalQuarter, getToneJsPositionInQuarter()); // Since Recoil doesn't know about tone js internal values, we have to sync out internal values when position OR seconds change.
  },
});

const internalQuarter = atom({
  key: 'transport/internalQuarter',
  default: getToneJsPositionInQuarter(),
});

const currentQuarter = selector<number>({
  key: 'transport/quarters',
  get: ({get}) => get(internalQuarter),
  set: ({set}, newValue) => {
    Tone.getTransport().position = `${newValue}:0:0`;

    console.log('pos', Tone.getTransport().position);

    set(internalQuarter, newValue as number);
    set(internalSeconds, Tone.getTransport().seconds);
  }
});

const currentSample = selector<number>({
  key: 'transport/frames',
  get: ({get}) => secondsToSamples(get(internalSeconds)),
});

const internalLoopStart = atom({
  key: 'transport/internalLoopStart',
  default: Tone.getTransport().loopStart,
});

const cycleStart = selector<number>({
  key: 'transport/cycleStart',
  get: ({get}) => get(internalLoopStart) as number,
  set: ({set}, newValue) => {
    Tone.getTransport().loopStart = newValue as number;
    set(internalLoopStart, newValue as number);
  },
});

const internalLoopEnd = atom<number>({
  key: 'transport/internalLoopEnd',
  default: selector({
    key: 'transport/internalLoopEnd/Default',
    get: () => {
      Tone.getTransport().loopEnd = 4;

      return Tone.getTransport().loopEnd as number;
    }
  }),
});

const cycleEnd = selector<number>({
  key: 'transport/cycleEnd',
  get: ({get}) => get(internalLoopEnd) as number,
  set: ({set}, newValue) => {
    Tone.getTransport().loopEnd = newValue as number;
    set(internalLoopEnd, newValue as number);
  },
});

const internalLoop = atom({
  key: 'transport/internalLoop',
  default: Tone.getTransport().loop,
});

const isCycleActive = selector<boolean>({
  key: 'transport/isCycleActive',
  get: ({get}) => get(internalLoop),
  set: ({set}, newValue) => {
    Tone.getTransport().loop = newValue as boolean;
    set(internalLoop, newValue as boolean);
  }
});

const isRecording = atom<boolean>({
  key: 'transport/isRecording',
  default: false,
});

const isPlaying = atom<boolean>({
  key: 'transport/isPlaying',
  default: false,
});

const playButtonModes = atom<PlayButtonMode[]>({
  key: 'transport/playButtonModes',
  default: [],
});

const bars = selector<Bar[]>({
  key: 'transport/rulerItems',
  get: ({get}) => {
    const projectLengthInQuarters = get(projectStore.lengthInQuarters);
    const timeSignatureMap = get(projectStore.timeSignatureMap);
    const changeKeys = getSortedKeysOfEventMap(timeSignatureMap);

    let currentTimeSignature = timeSignatureMap[0];
    let bar = 1;

    const rulerItems: Bar[] = [];

    for (let divideBy = currentTimeSignature[1] / 4, i = 0; i < projectLengthInQuarters; i += currentTimeSignature[0] / divideBy, bar++) {
      if (changeKeys.includes(i)) {
        currentTimeSignature = timeSignatureMap[i];
        divideBy = currentTimeSignature[1] / 4;
      }

      rulerItems.push({
        bar,
        quarterInProject: i,
        lengthInQuarters: currentTimeSignature[0] / divideBy,
        timeSignature: currentTimeSignature,
        displayOnRulerBar: true,
      });
    }

    return rulerItems;
  }
});

const filteredBars = selector<Bar[]>({
  key: 'transport/filteredRulerItems',
  get: ({get}) => {
    const allItems = get(bars);
    const baseQuarterWidth = get(arrangeWindowStore.baseQuarterPixelWidth);

    let spaceBetween = 40;

    return allItems.map((item, i): Bar => {
      spaceBetween += item.lengthInQuarters * baseQuarterWidth;

      if (spaceBetween >= 40) {
        spaceBetween = 0;

        return item;
      }

      return {
        ...item,
        displayOnRulerBar: false,
      }
    });
  }
});

const currentBar = selector<Bar | undefined>({
  key: 'transport/timeSignatureAtQuarter',
  get: ({get}) => {
    const quarter = get(currentQuarter);

    return get(bars).find(item => item.quarterInProject <= quarter && quarter < item.quarterInProject + item.lengthInQuarters)
  }
});

const barAtQuarter = selectorFamily<Bar | undefined, number>({
  key: 'transport/barAtQuarter',
  get: quarter => ({get}) => {
    const items = get(bars);
    const index = items.findIndex(item => item.quarterInProject <= quarter && quarter < item.quarterInProject + item.lengthInQuarters);

    const barCandidate = items[index];

    if (barCandidate.quarterInProject + (barCandidate.lengthInQuarters / 2) <= quarter && index < items.length - 1) {
      return items[index + 1];
    }

    return barCandidate;
  }
});

export const transportStore = {
  seconds,
  currentQuarter,
  currentSample,
  cycleStart,
  cycleEnd,
  isCycleActive,
  isRecording,
  isPlaying,
  playButtonModes,
  bars,
  filteredBars,
  currentBar,
  barAtQuarter,
};