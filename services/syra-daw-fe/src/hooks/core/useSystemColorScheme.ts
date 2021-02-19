import { useState, useEffect } from 'react';

type Preference = 'dark' | 'light' | 'no-preference';

export const PREFERENCES = {
  DARK: 'dark',
  LIGHT: 'light',
  NONE: 'no-preference',
};

export const values: Preference[] = [PREFERENCES.DARK, PREFERENCES.LIGHT, PREFERENCES.NONE] as Preference[];

export const makeQuery = (pref: Preference) => `(prefers-color-scheme: ${pref})`;

export const matchPreference = (pref: Preference) => window.matchMedia(makeQuery(pref));

export const getPreference = (preferences: Preference[]) =>
  preferences
    .map((value) => ({
      preference: value,
      matchMedia: matchPreference(value),
    }))
    .filter((pref) => pref.matchMedia.matches)[0];

export const attachListener = (
  pref: {
    matchMedia: { removeListener: (arg0: { (): void; (): void }) => void; addListener: (arg0: () => void) => void };
  },
  setScheme: { (value: any): void; (arg0: any): void },
) => {
  let unbind: { (): void; (): void };

  const listener = () => {
    const newPref = getPreference(values);
    setScheme(newPref.preference);
    pref.matchMedia.removeListener(listener);
    unbind = attachListener(newPref, setScheme);
  };

  pref.matchMedia.addListener(listener);

  return () => {
    if (unbind) {
      unbind();
    } else {
      pref.matchMedia.removeListener(listener);
    }
  };
};

const initialPreference = getPreference(values);

export default function useSystemColorScheme() {
  const [scheme, setScheme] = useState(initialPreference ? initialPreference.preference : PREFERENCES.NONE);

  useEffect(() => {
    if (!initialPreference) return;
    return attachListener(initialPreference, setScheme);
  }, []);

  if (!('matchMedia' in window)) {
    return PREFERENCES.NONE;
  }

  return scheme;
}
