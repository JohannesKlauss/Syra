import { atom } from "recoil";

const hasUserGrantedAccessToFileSystem = atom({
  key: 'system/hasUserGrantedAccessToFileSystem',
  default: false,
});

export const systemStore = {
  hasUserGrantedAccessToFileSystem,
};