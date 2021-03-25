import { AtomEffect } from "recoil";

export type RecoilAtomEffect<P, T> = (key: string, id?: P) => AtomEffect<T>;