export enum ChannelType {
  AUDIO,
  INSTRUMENT,
  AUX,
  MASTER,
  VCA_GROUP,
  MIX_GROUP,
}

export enum ChannelNode {
  CHANNEL_ID = 'channelId',
  MERGE = 'merge',
  SPLIT = 'split',
  PLAYERS = 'players',
  AUDIO_IN = 'audioIn',
  CHANNEL = 'channel',
  METER = 'meter',
  VOLUME = 'volume',
  PAN = 'pan',
  SOLO = 'solo',
}