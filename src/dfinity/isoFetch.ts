import syra_assets from 'ic:canisters/syra_assets';

export function isoFetch(path: string): Promise<Response> {
  if (process.env.NODE_ENV === 'production') {
    return new Promise((resolve, reject) => {
      syra_assets.retrieve(path)
        .then(bytes => {
          resolve(new Response(new TextDecoder().decode(new Uint8Array(bytes))));
        })
        .catch(reason => reject(reason))
      ;
    });
  } else {
    return fetch(path);
  }
}