export type AudioTranscodeJob = {
  spacesObject: {
    id: string;
    location: string;
    name: string;
  };
  targetFormat: string;
  projectId: string;
};
