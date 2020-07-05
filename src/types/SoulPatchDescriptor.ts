interface Bus {
  index: number;
  name: string;
  numChannels: number;
}

interface Properties {
  init: number;
  max: number;
  min: number;
  name: string;
  step: number;
}

export interface SoulPatchParameter {
  group: string;
  id: string;
  index: number;
  initialValue: number | boolean;
  maxValue?: number;
  minValue?: number;
  name: string;
  step?: number;
  text: string;
  unit: string;
  properties: Properties;
}

interface Descriptor {
  description: string;
  inputBuses: Bus[];
  outputBuses: Bus[];
  parameters: SoulPatchParameter[];
}

export type SoulPatchDescriptor = Descriptor;