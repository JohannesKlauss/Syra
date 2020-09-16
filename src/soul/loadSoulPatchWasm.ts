import { SoulPatch, SoulPatchDescriptor } from '../types/Soul';
import { isoFetch } from '../dfinity/isoFetch';

export default async function loadSoulPatchWasm(path: string, name: string): Promise<SoulPatch> {
  const patch = await WebAssembly.instantiateStreaming(isoFetch(path));

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