import { atom, selector } from 'recoil/dist';

const name = atom({
  key: 'project/name',
  default: 'New Syra Project',
});

// The tempo map of the project. The key is transport seconds and the value is beats per minute.
const tempoMap = atom<{[name: number]: number}>({
  key: 'project/tempoMap',
  default: {
    0: 120,
  }
});

// Display the current tempo. This changes accordingly to the tempoMap inside useTempoMapScheduler.
const currentTempo = atom({
  key: 'project/currentTempo',
  default: selector({
    key: 'project/currentTempo/Default',
    get: ({get}) => get(tempoMap)[0],
  })
});

const timeSignatureMap = atom<{[name: number]: [number, number]}>({
  key: 'project/timeSignatureMap',
  default: {
    0: [4, 4],
    2: [8, 8],
    6: [2, 4],
    8: [4, 4],
  }
});

const currentTimeSignature = atom<[number, number]>({
  key: 'project/currenTimeSignature',
  default: selector({
    key: 'project/currentTimeSignature/Default',
    get: ({get}) => get(timeSignatureMap)[0],
  })
})

const lastAnalyzedBpmFromImport = atom<number | null>({
  key: 'project/lastAnalyzedBpmFromImport',
  default: null,
})

// The project length in bars. At 120 bpm 120 bars equal 3:30 minutes.
// TODO: THIS SHOULD BE AN ARRAY OF OBJECTS SO WE CAN CHANGE THE BPM DURING THE PROJECT.
const length = atom({
  key: 'project/length',
  default: 128,
});

const lengthInSeconds = selector({
  key: 'project/lengthInSeconds',
  get: ({get}) => get(length) * get(secondsPerBeat),
});

const beatsPerSecond = selector({
  key: 'arrangeWindow/beatsPerSecond',
  get: ({get}) => 1 / (get(currentTempo) / 60),
});

const secondsPerBeat = selector({
  key: 'arrangeWindow/secondsPerBeat',
  get: ({get}) => 60 / get(currentTempo),
});

const isClickMuted = atom<boolean>({
  key: 'project/isClickMuted',
  default: false,
});

export const projectStore = {
  name,
  tempoMap,
  currentTempo,
  timeSignatureMap,
  currentTimeSignature,
  beatsPerSecond,
  secondsPerBeat,
  length,
  lengthInSeconds,
  isClickMuted,
  lastAnalyzedBpmFromImport,
};