import { RecoilAtomEffect } from "../../types/Recoil";
import { subscribeChangeEffect } from "./subscribeChangeEffect";
import { publishChangeEffect } from "./publishChangeEffect";

export const pubSubEffect: RecoilAtomEffect<string | Record<string, any>, any> = (key, id) => (param) => {
  const pubEffect = publishChangeEffect(key, id);
  const subEffect = subscribeChangeEffect(key, id);

  pubEffect(param);
  subEffect(param);
}