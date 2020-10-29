import { atom } from 'recoil';

const refetchMe = atom({
  key: 'feed/refetchMe',
  default: false,
});

export const userStore = {
  refetchMe,
}