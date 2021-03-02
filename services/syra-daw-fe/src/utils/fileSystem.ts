let rootHandle: FileSystemDirectoryHandle | undefined = undefined;

const init = async (projectId: string) => {
  if (rootHandle) {
    return;
  }

  try {
    const root = await navigator.storage.getDirectory();
    rootHandle = await root.getDirectoryHandle(projectId, { create: true });
  } catch (e) {
    console.info('private file storage not available');
  }
}

const clearDirectory = async () => {
  if (rootHandle) {
    let i = 0;

    for await (let [name, handle] of rootHandle.entries()) {
      handle.isFile && await rootHandle.removeEntry(name);
      i++;
    }

    console.log(`Removed ${i} files from directory.`);
  }
};

const writeAudioFile = async (assetId: string, file: File | Blob) => {
  if (rootHandle) {
    let fileExtension = '';

    if (file instanceof File) {
      const r = /(?:\.([^.]+))?$/.exec(file.name);

      if (r !== null) {
        fileExtension = r[1];
      }
    } else {
      fileExtension = file.type.split('/')[1].replace('x-', '');
    }

    const fileHandle = await rootHandle.getFileHandle(`${assetId}.${fileExtension}`, {create: true});

    await file.stream().pipeTo(await fileHandle.createWritable({keepExistingData: false}));

    console.log('WROTE FILE TO SYSTEM', `${assetId}.${fileExtension}`);
  }
};

const readArrayBufferFromFile = async (assetId: string) => {
  if (rootHandle) {
    console.log('READING FROM SYSTEM', assetId);

    let fileHandle;

    try {
      fileHandle = await rootHandle.getFileHandle(assetId);
    } catch (e) {
      console.log('could not get file handle');
    }

    if (fileHandle) {
      let file;

      try {
        file = await fileHandle.getFile();
      } catch (e) {
        console.log('Could not get file', e);
      }

      if (file && file.size > 0) {
        console.log('FILE', file);

        const arrayBuffer = await file.arrayBuffer();

        if (arrayBuffer.byteLength > 0) {
          console.log('return arrayBuffer', arrayBuffer);
          console.log('assetId', assetId);

          return arrayBuffer.slice(0);
        }
      }
    }
  }
};

export const fileSystem = {
  init,
  writeAudioFile,
  readArrayBufferFromFile,
  clearDirectory
};