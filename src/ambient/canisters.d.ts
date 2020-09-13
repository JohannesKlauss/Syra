declare module 'ic:canisters/user' {
  export const getUserId: () => Promise<number>;
}

declare module 'ic:canisters/project' {
  export const getName: () => Promise<string>;
  export const setName: (newName: string) => Promise<void>;
}

declare module 'ic:canisters/syra_assets' {
  export const retrieve: (path: string) => Promise<number[]>;
}
