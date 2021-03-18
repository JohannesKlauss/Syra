import * as Tone from 'tone';
import { TransportSchedule } from "../types/Misc";

export class AudioRegionManager extends Tone.Players {
  schedule(regionId: string, audioBuffer: AudioBuffer, info: TransportSchedule) {
    if (!this.has(regionId)) {
      this.add(regionId, audioBuffer);
    }

    this.player(regionId)
      .unsync().sync()
      .start(Tone.Ticks(info.start).toSeconds(), Tone.Ticks(info.offset).toSeconds(), Tone.Ticks(info.duration).toSeconds());
  }

  cleanUp(regionId: string) {
    this.player(regionId).unsync();
  }

  toggleMute(regionId: string, mute: boolean) {
    if (this.has(regionId)) {
      this.player(regionId).set({mute});
    }
  }
}