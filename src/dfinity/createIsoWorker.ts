import syra_assets from 'ic:canisters/syra_assets';

export async function createIsoWorker(path: string) {
  if (process.env.NODE_ENV === 'production') {
    const jsBytes = await syra_assets.retrieve(path);

    const js = new TextDecoder().decode(new Uint8Array(jsBytes));

    const workerData = new Blob([`(() => {${js}})()`], {
      type: 'text/javascript'
    });

    console.log('use canister');

    return new Worker(window.URL.createObjectURL(workerData));
  } else {
    console.log('use normal');

    return new Worker(path);
  }
}