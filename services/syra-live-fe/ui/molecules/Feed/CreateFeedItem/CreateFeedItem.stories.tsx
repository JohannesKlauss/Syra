import CreateFeedItem from './CreateFeedItem';
import * as React from 'react';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import {
  CreateFeedItemDocument,
  CreateFeedItemMutation, CreateFeedItemMutationVariables,
  MeDocument,
  MeQuery,
  MyMixdownsDocument,
  MyMixdownsQuery,
} from '../../../../gql/generated';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { MeMock } from '../../../../stories/apolloMocks/user';
import { MyMixdownsMock } from '../../../../stories/apolloMocks/mixdown';
import { CreateFeedItemMock } from '../../../../stories/apolloMocks/feedItem';

const Template = (args) => <CreateFeedItem {...args} />;

export default {
  title: 'molecules/Feed/CreateFeedItem/CreateFeedItem',
  component: CreateFeedItem,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock),
  mockApolloResult<MyMixdownsQuery>(MyMixdownsDocument, MyMixdownsMock),
  mockApolloResult<CreateFeedItemMutation, CreateFeedItemMutationVariables>(CreateFeedItemDocument, CreateFeedItemMock, {
    me: 'foo',
    text: 'Test',
  }),
]);