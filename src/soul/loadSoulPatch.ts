import { SoulPatchDescriptor } from '../types/SoulPatchDescriptor';
import { SoulPatch } from '../types/SoulPatch';

export default async function loadSoulPatch(path: string): Promise<SoulPatch> {
  const patch = await WebAssembly.instantiateStreaming(fetch(path));

  // @ts-ignore
  const moduleBuffer = new Uint8Array(patch.instance.exports.memory.buffer, patch.instance.exports.getDescription(), patch.instance.exports.getDescriptionLength());
  let bufferContent = "";

  for (let i = 0; i < moduleBuffer.length; i++) {
    bufferContent += String.fromCharCode(moduleBuffer[i]);
  }

  const descriptor: SoulPatchDescriptor = JSON.parse(bufferContent);

  return {
    descriptor,
    module: patch.module
  }
}