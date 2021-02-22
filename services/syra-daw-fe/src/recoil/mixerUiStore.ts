import { atom } from "recoil";

const pluginListLength = atom({
  key: 'mixerUi/pluginListLength',
  default: 0,
});

export const mixerUiStore = {
  pluginListLength,
}