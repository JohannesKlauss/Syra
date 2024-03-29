import { GetRecoilValue, RecoilState, RecoilValue } from 'recoil';
import { fileSystem } from '../../utils/fileSystem';
import axios from 'axios';

type AtomFamily<T, P> = (param: P) => RecoilState<T>;
type SelectorFamilyGet<P, T> = (param: P) => (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;

/**
 * This function creates a selector that serves a requested file.
 * The selector checks if there is a local file system available and then tries
 * to load it from there, otherwise it will try to fetch the file from the server.
 * If the files is loaded from the server, the selector will try to save it to
 * the local file system for further reference.
 *
 * Once the file is available, we read it as an ArrayBuffer and give it to the
 * async function that can decode an audio file or create a peak array for the
 * waveform, etc.
 *
 * @param internalBuffer
 * @param storedDbId
 * @param fileExtension
 */
export function makeFileBufferSelector<T>(
  internalBuffer: AtomFamily<T | null, string>,
  storedDbId: AtomFamily<string, string>,
  fileExtension: string,
) {
  return (asyncBufferCreator: (arrayBuffer: ArrayBuffer) => Promise<T>): SelectorFamilyGet<string, T | null> => {
    return (id) => async ({ get }) => {
      if (id.length === 0) {
        return null;
      }

      let buffer = get(internalBuffer(id));

      // Buffer is in memory.
      if (buffer) {
        return buffer;
      }

      const storedId = get(storedDbId(id));

      if (storedId.length === 0) {
        return null;
      }

      // Try to read the file from local file system
      const arrayBuffer = await fileSystem.readArrayBufferFromFile(`${storedId}.${fileExtension}`);

      if (arrayBuffer) {
        try {
          return await asyncBufferCreator(arrayBuffer);
        } catch (e) {}
      }

      // Load file from server
      const res = await axios.get(`${process.env.REACT_APP_LIVE_GQL_URL}/files/${storedId}`, {
        withCredentials: true,
        responseType: 'blob',
      });

      if (res.status === 200) {
        try {
          await fileSystem.writeFile(storedId, res.data);

          return await asyncBufferCreator(await res.data.arrayBuffer());
        } catch (e) {
          // TODO: Show error to user.
          console.log('could not write transcoded file', e);
        }
      }

      return null;
    };
  };
}
