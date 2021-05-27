let rootHandle: FileSystemDirectoryHandle | undefined = undefined;

const init = async (projectId: string) => {
  if (rootHandle) {
    return;
  }

  try {
    const root = await navigator.storage.getDirectory();
    rootHandle = await root.getDirectoryHandle(projectId, { create: true });
  } catch (e) {
    console.info('private file storage not available.');
  }
}

const clearDirectory = async () => {
  if (rootHandle) {
    for await (let [name, handle] of rootHandle.entries()) {
      if (handle.kind === 'file') {
        await rootHandle.removeEntry(name);
      }
    }
  }
};

const getFiles = async () => {
  const files: File[] = [];

  if (rootHandle) {
    for await (let [, handle] of rootHandle.entries()) {
      if (handle.kind === 'file') {
        files.push(await handle.getFile());
      }
    }
  }

  return files;
}

const writeFile = async (assetId: string, file: File | Blob) => {
  if (rootHandle) {
    let fileExtension = '';

    if (file instanceof File) {
      const r = /(?:\.([^.]+))?$/.exec(file.name);

      if (r !== null) {
        fileExtension = r[1];
      }
    } else {
      fileExtension = file.type.split('/')[1];
    }

    const fileHandle = await rootHandle.getFileHandle(`${assetId}.${fileExtension}`, {create: true});

    await file.stream().pipeTo(await fileHandle.createWritable({keepExistingData: false}));
  }
};

const readArrayBufferFromFile = async (assetId: string) => {
  if (rootHandle) {
    let fileHandle;

    try {
      fileHandle = await rootHandle.getFileHandle(assetId);
    } catch (e) {
      console.log('could not get file handle', assetId);
    }

    if (fileHandle) {
      let file;

      try {
        file = await fileHandle.getFile();
      } catch (e) {
        console.log('Could not get file', e);
      }

      if (file && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();

        if (arrayBuffer.byteLength > 0) {
          return arrayBuffer.slice(0);
        }
      }
    }
  }
};

export const fileSystem = {
  init,
  writeFile,
  readArrayBufferFromFile,
  clearDirectory,
  getFiles
};