import { SoulPatch } from './SoulPatch';

export interface SoulInstance {
  soulPatch: SoulPatch;
  audioNode: AudioWorkletNode;
}