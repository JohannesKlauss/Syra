import { addSeconds, format } from 'date-fns';

export const formatAudioDuration = (seconds: number) => format(addSeconds(new Date(0), seconds), 'mm:ss');