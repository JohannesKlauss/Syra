import { ChannelGraphManager } from "./channels/ChannelGraphManager";

class SyraEngine {
  private _channelGraphManager = new ChannelGraphManager();

  private static instance: SyraEngine;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): SyraEngine {
    if (!SyraEngine.instance) {
      SyraEngine.instance = new SyraEngine();
    }

    return SyraEngine.instance;
  }

  get channels() {
    return this._channelGraphManager;
  }
}

export const syraEngine = SyraEngine.getInstance();