import { RecoilAtomEffect } from "../../types/Recoil";
import { AtomEffect } from "recoil";
import { subscribeChangeEffect } from "./subscribeChangeEffect";
import { publishChangeEffect } from "./publishChangeEffect";

export const pubSubEffect: RecoilAtomEffect = <P, T>(key: string, id?: P): AtomEffect<T> => (param) => {
  const pubEffect = publishChangeEffect<P, T>(key, id);
  const subEffect = subscribeChangeEffect<P, T>(key, id);

  pubEffect(param);
  subEffect(param);
}