export default function isoFetch(path: string): Promise<Response> {
  try {
    const syra_assets = require('ic:canisters/syra_assets');

    return syra_assets.retrieve(path);
  } catch (e) {
    return fetch(path);
  }
}