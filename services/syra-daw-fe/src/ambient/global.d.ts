import { JitsiMeetExternalAPI } from "../types/JitsiMeetExternalAPI";

declare global {
  interface Window {
    JitsiMeetExternalAPI: typeof JitsiMeetExternalAPI;
  }
}

window.JitsiMeetExternalAPI = window.JitsiMeetExternalAPI || {};