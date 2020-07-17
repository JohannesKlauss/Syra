import * as Tone from 'tone';
import { SetterOrUpdater } from 'recoil/dist';

export const toneMeterFactory = (smoothing: number = 0.95) => new Tone.Meter({ smoothing });

export const audioInputFactory = async () => {
  const audioInterface = new Tone.UserMedia();

  return await audioInterface.open();
};

type MemoizeToneJsFactory = <K extends Map<string, any>>(recoilState: [K, SetterOrUpdater<K>]) =>
  <T extends Tone.ToneAudioNode>(ctor: (({ new(): T }) | (() => T))) => T;

export const toneJsFactory: MemoizeToneJsFactory = (recoilState) => {
  const [map, setMap] = recoilState;

  return <T>(ctor: (({ new(): T }) | (() => T))) => {
    // TODO: USING CTOR NAME as id is probably not a good idea, because we might need multiple instances of the same class.
    if (map.has(ctor.name)) {
      return map.get(ctor.name)!;
    }

    let newInstance;

    try {
      // @ts-ignore
      newInstance = new ctor();
    } catch (e) {
      // @ts-ignore
      newInstance = ctor();
    }

    map.set(ctor.name, newInstance);

    setMap(map);

    return newInstance;
  }
}