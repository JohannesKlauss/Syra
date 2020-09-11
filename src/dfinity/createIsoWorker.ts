export async function createIsoWorker(path: string) {
  try {
    const syra_assets = await import('ic:canisters/syra_assets');

    const jsBytes = await syra_assets.retrieve(path);

    const js = new TextDecoder().decode(new Uint8Array(jsBytes));

    const workerData = new Blob([`(() => ${js})()`], {
      type: 'text/javascript'
    });

    console.log('use canister');

    return new Worker(window.URL.createObjectURL(workerData));
  } catch(e) {
    console.log('use normal');

    return new Worker(path);
  }
}