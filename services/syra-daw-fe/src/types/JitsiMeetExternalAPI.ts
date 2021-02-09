type Device = {
  deviceId: string;
  groupId: string;
  kind: string;
  label: string;
};

type AvailableDevices = {
  audioInput: ReadonlyArray<Device>;
  audioOutput: ReadonlyArray<Device>;
  videoInput: ReadonlyArray<Device>;
};

type Options = {
  roomName: string;
  width: number;
  height: number;
  parentNode: HTMLElement;
  configOverwrite?: Record<string, any>;
  interfaceConfigOverwrite?: Record<string, any>;
  jwt?: string;
  onload?: () => void;
  invitees?: ReadonlyArray<Record<string, any>>;
  devices?: Record<string, any>;
  userInfo?: Record<string, any>;
};

export declare interface JitsiInstance {
  captureLargeVideoScreenshot(): Promise<{ dataUrl: string }>;

  getAvailableDevices(): Promise<AvailableDevices>;

  executeCommand(command: string, ...args: any): void;

  dispose(): void;
}

export declare const JitsiMeetExternalAPI: {
  new (domain: string, options: Options): JitsiInstance;
}