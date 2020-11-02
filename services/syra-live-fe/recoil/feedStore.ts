import { atom, atomFamily } from "recoil";

const refetchFeed = atom({
  key: 'feed/refetch',
  default: false,
});

const refetchCommentList = atomFamily<boolean, string>({
  key: 'feed/refetchCommentList',
  default: false,
});

export const feedStore = {
  refetchFeed,
  refetchCommentList,
}