import { Priority } from "../types/Priority";

export const getPriorityForAtomKey = (key: string) => {
  let priority = Priority.DEFAULT;

  switch (key) {
    case 'channel/ids':
      priority = Priority.CHANNEL_ID_LIST;
      break;
    case 'audioBuffer/ids':
      priority = Priority.AUDIO_BUFFER_ID_LIST;
      break;
    case 'region/ids':
      priority = Priority.REGION_ID_LIST;
      break;
  }

  return priority;
}