import React from 'react';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../apollo/client';
import { MeDocument, useMeQuery } from '../../gql/generated';
import { useRouter } from 'next/router';
import {
  Channel,
  ChannelHeader,
  ChannelList,
  ChannelListMessenger,
  ChannelPreviewMessenger,
  Chat,
  MessageInput,
  MessageInputFlat,
  MessageList,
  MessageSimple,
  Thread,
  TypingIndicator,
  Window,
} from 'stream-chat-react';
import * as Client from 'stream-chat';
import useStreamChat from '../../hooks/useStreamChat';
import { Skeleton } from '@chakra-ui/core';
import 'stream-chat-react/dist/css/index.css';

export default function ChatPage() {
  const { data, error, loading } = useMeQuery();
  const { push } = useRouter();
  const [chatClient, isInitialized] = useStreamChat();

  if (loading) return <Skeleton h={24} />;
  if (error || data.me == null) {
    push('/');

    return null;
  }

  const filters = { type: 'messaging', members: { $in: [data.me.id] } };
  const sort: Client.ChannelSort = { last_message_at: -1 };

  return (
    <>
      <TopBar />
      <PageBox>
        {isInitialized ? (
          <Chat client={chatClient} theme={'messaging dark'}>
            <ChannelList filters={filters} sort={sort} List={ChannelListMessenger} Preview={ChannelPreviewMessenger} />
            <Channel>
              <Window>
                <ChannelHeader/>
                <MessageList TypingIndicator={TypingIndicator} />
                <MessageInput Input={MessageInputFlat} focus />
              </Window>
              <Thread Message={MessageSimple} />
            </Channel>
          </Chat>
        ) : (
          <Skeleton h={24} />
        )}
      </PageBox>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo(null, context.req.headers.cookie);

  await apolloClient.query({
    query: MeDocument,
  });

  return {
    props: {
      namespacesRequired: ['default'],
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
