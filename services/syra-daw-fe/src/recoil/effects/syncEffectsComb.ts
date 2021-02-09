import { pubSubEffect } from "./pubSubEffect";
import { saveToDatabaseEffect } from "./saveToDatabaseEffect";
import { loadInitialStateEffect } from "./loadInitialStateEffect";

export const syncEffectsComb = [
  pubSubEffect,
  saveToDatabaseEffect,
  loadInitialStateEffect,
]