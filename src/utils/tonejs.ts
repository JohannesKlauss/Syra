import * as Tone from 'tone';
import { SetterOrUpdater } from 'recoil';

export const getToneJsPositionInQuarter = () => {
  console.log('pos', Tone.getTransport().position);

  return parseInt((Tone.getTransport().position as string).split(':')[0]);
};

export const toneMeterFactory = (smoothing: number = 0.95) => new Tone.Meter({ smoothing });

type MemoizeToneJsFactory = <K extends Map<string, any>>(recoilState: [K, SetterOrUpdater<K>]) =>
  <T extends Tone.ToneAudioNode>(ctor: (({ new(): T }) | (() => T)), id: string) => T;

export const toneJsFactory: MemoizeToneJsFactory = (recoilState) => {
  const [map, setMap] = recoilState;

  return <T>(ctor: (({ new(): T }) | (() => T)), id: string) => {
    // TODO: USING CTOR NAME as id is probably not a good idea, because we might need multiple instances of the same class in one channel.
    if (map.has(id)) {
      return map.get(id);
    }

    let newInstance;

    try {
      // @ts-ignore
      newInstance = new ctor();
    } catch (e) {
      // @ts-ignore
      newInstance = ctor();
    }

    map.set(id, newInstance);

    setMap(map);

    return newInstance;
  }
}