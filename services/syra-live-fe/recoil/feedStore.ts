import { atom } from 'recoil';

const refetchFeed = atom({
  key: 'feed/refetch',
  default: false,
});

export const feedStore = {
  refetchFeed,
}