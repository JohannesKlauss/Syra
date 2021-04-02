import { selector } from "recoil";
import atomWithEffects from "./proxy/atomWithEffects";
import { localStorageEffect } from "./effects/localStorageEffect";

const activeInputDeviceId = atomWithEffects<string>({
  key: 'audioRouting/activeInputDeviceId',
  default: selector({
    key: 'audioRouting/activeInputDeviceId/Default',
    get: async () => {
      if (localStorage.getItem('audioRouting/activeInputDeviceId') !== null) {
        return localStorage.getItem('audioRouting/activeInputDeviceId')!;
      }

      const devices = await navigator.mediaDevices.enumerateDevices();

      const device = devices.filter(device => device.kind === 'audioinput').shift();

      return device?.deviceId ?? '';
    }
  }),
  effects: [
    localStorageEffect,
  ]
});

const activeOutputDeviceId = atomWithEffects<string>({
  key: 'audioRouting/activeOutputDeviceId',
  default: selector({
    key: 'audioRouting/activeOutputDeviceId/Default',
    get: async () => {
      if (localStorage.getItem('audioRouting/activeOutputDeviceId') !== null) {
        return localStorage.getItem('audioRouting/activeOutputDeviceId')!;
      }

      const devices = await navigator.mediaDevices.enumerateDevices();

      const device = devices.filter(device => device.kind === 'audiooutput').shift();

      return device?.deviceId ?? '';
    }
  }),
  effects: [
    localStorageEffect,
  ]
});

export const audioRoutingStore = {
  activeInputDeviceId,
  activeOutputDeviceId,
}