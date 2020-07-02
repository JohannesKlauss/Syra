import { SoulPatchDescriptor } from './SoulPatchDescriptor';

interface Patch {
  descriptor: SoulPatchDescriptor;
  module: WebAssembly.Module;
}

export type SoulPatch = Patch;