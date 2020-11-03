import getConfig from 'next/config';

type TPublicRuntimeConfig = {
  NEXT_PUBLIC_STREAM_CHAT_KEY: string;
  NEXT_PUBLIC_LIVE_GQL_URL: string;
}

const { publicRuntimeConfig } = getConfig();

export default publicRuntimeConfig as TPublicRuntimeConfig;