import { FeUser } from './User';

export type FeedMetaInfo = {
  id: string;
  timestamp: number;
  title: string;
  description?: string;
}

export type TFeedItem = {
  owner: FeUser;
  metaInfo: FeedMetaInfo;
}