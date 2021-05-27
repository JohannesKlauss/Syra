import { ChannelGraphManager } from "./channels/ChannelGraphManager";

export const createSyraEngineInstance = () => ({
  channels: ChannelGraphManager(),
});