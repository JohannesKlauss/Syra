import React from 'react';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import { useMeQuery } from '../../gql/generated';
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
import ProtectedRoute from "../../providers/auth/ProtectedRoute";

export default function ChatPage() {
  const { data, loading } = useMeQuery();
  const [chatClient, isInitialized] = useStreamChat();

  if (loading) return <Skeleton h={'85vh'} />;

  const filters = { type: 'messaging', members: { $in: [data.me.id] } };
  const sort: Client.ChannelSort = { last_message_at: -1 };

  return (
    <ProtectedRoute>
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
          <Skeleton h={'85vh'} />
        )}
      </PageBox>
    </ProtectedRoute>
  );
}