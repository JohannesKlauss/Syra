import { AbstractChannel } from "./AbstractChannel";

export abstract class AbstractRecordableChannel extends AbstractChannel {
  private _isArmed: boolean = false;
  private _isInputMonitoringActive: boolean = false;

  protected abstract updateArming(): void;
  protected abstract updateInputMonitoring(): void;

  get isArmed(): boolean {
    return this._isArmed;
  }

  set isArmed(isArmed: boolean) {
    this._isArmed = isArmed;

    this.updateArming();
  }

  get isInputMonitoringActive(): boolean {
    return this._isInputMonitoringActive;
  }

  set isInputMonitoringActive(isInputMonitoringActive: boolean) {
    this._isInputMonitoringActive = isInputMonitoringActive;

    this.updateInputMonitoring();
  }
}