export default async function sbLoadAudioFile() {
  const res = await fetch('/audio/default.wav');
  const buffer = await res.blob();

  return {
    audioFile: new File([buffer], 'default.wav', { type: 'audio/wav' }),
  };
}