import { atom, selector, selectorFamily } from "recoil";
import * as Tone from "tone";
import { PlayButtonMode } from "../types/PlayButtonMode";
import { Bar } from "../types/Ui";
import { projectStore } from "./projectStore";
import { getSortedKeysOfEventMap } from "../utils/eventMap";
import { getToneJsPositionInQuarter } from "../utils/tonejs";
import { gridStore } from "./gridStore";
import { View } from "../types/View";

// Internal atoms are just used to sync everything with the ToneJs transport itself. Never expose them to the rest of the app.
// TODO: WE SHOULD BE ABLE TO REFACTOR THIS TO ATOM EFFECTS INSIDE RECOIL ATOMS ONCE THEIR API IS STABLE.

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
  set: ({get, set}, newValue) => {
    Tone.getTransport().position = `${newValue}:0:0`;

    set(internalQuarter, newValue as number);
    set(internalSeconds, Tone.getTransport().seconds);

    set(currentTimeSignature, get(timeSignatureAtQuarter(newValue as number)));
  }
});

// The internal Cycle values are quarters while the ToneJs Transport returns seconds.

const internalCycleStart = atom<number>({
  key: 'transport/internalCycleStart',
  default: selector({
    key: 'transport/internalCycleStart/Default',
    get: () => {
      Tone.getTransport().loopStart = 0;

      return 0;
    }
  }),
});

const cycleStart = selector<number>({
  key: 'transport/cycleStart',
  get: ({get}) => get(internalCycleStart),
  set: ({set}, newValue) => {
    Tone.getTransport().loopStart = newValue as number;
    set(internalCycleStart, newValue);
  },
});

const internalCycleEnd = atom<number>({
  key: 'transport/internalCycleEnd',
  default: selector({
    key: 'transport/internalCycleEnd/Default',
    get: () => {
      Tone.getTransport().loopEnd = 4;

      return 4;
    }
  }),
});

const cycleEnd = selector<number>({
  key: 'transport/cycleEnd',
  get: ({get}) => get(internalCycleEnd),
  set: ({set}, newValue) => {
    Tone.getTransport().loopEnd = newValue as number;
    set(internalCycleEnd, newValue);
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

const currentTempo = atom<number>({
  key: 'transport/currentTempo',
  default: selector<number>({
    key: 'transport/currentTempo/Default',
    get: ({get}) => {
      const map = get(projectStore.tempoMap);

      return map[0];
    }
  }),
});

const secondsPerBeat = selector({
  key: 'transport/secondsPerBeat',
  get: ({ get }) => 60 / get(currentTempo),
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
    const baseQuarterWidth = get(gridStore.baseQuarterPixelWidth(View.ARRANGE_WINDOW));

    let spaceBetween = 40;

    return allItems.map((item): Bar => {
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
  key: 'transport/currentBar',
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

const timeSignatureAtQuarter = selectorFamily<[number, number], number>({
  key: 'transport/timeSignatureAtQuarter',
  get: (quarter) => ({ get }) => {
    const bar = get(barAtQuarter(quarter));

    return bar?.timeSignature || get(projectStore.timeSignatureMap)[0];
  },
});

const currentTimeSignature = atom<[number, number]>({
  key: 'transport/currentTimeSignature',
  default: selector({
    key: 'transport/currentTimeSignature/Default',
    get: ({ get }) => {
      return get(currentBar)?.timeSignature || get(projectStore.timeSignatureMap)[0];
    },
  }),
});

export const transportStore = {
  seconds,
  currentQuarter,
  cycleStart,
  cycleEnd,
  isCycleActive,
  currentTempo,
  isRecording,
  isPlaying,
  playButtonModes,
  bars,
  filteredBars,
  currentBar,
  barAtQuarter,
  secondsPerBeat,
  timeSignatureAtQuarter,
  currentTimeSignature,
};