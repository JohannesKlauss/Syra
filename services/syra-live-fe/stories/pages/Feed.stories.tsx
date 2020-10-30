import * as React from 'react';
import Feed from '../../pages/feed';
import { mockApollo, mockApolloResult } from '../mockApollo';
import {
  CreateFeedItemDocument,
  CreateFeedItemMutation,
  CreateFeedItemMutationVariables, FeedItemByIdDocument, FeedItemByIdQuery, FeedItemByIdQueryVariables,
  MeDocument,
  MeQuery, MyFeedDocument, MyFeedQuery,
  MyMixdownsDocument,
  MyMixdownsQuery
} from "../../gql/generated";
import { MeMock } from '../apolloMocks/user';
import { MyMixdownsMock } from '../apolloMocks/mixdown';
import {
  CreateFeedItemMock,
  FeedItemByIdMockBar,
  FeedItemByIdMockFoo,
  FeedItemsByHandleMock
} from "../apolloMocks/feedItem";
import { withApolloClient } from 'storybook-addon-apollo-client';

const Template = (args) => <Feed {...args} />;

export default {
  title: 'x pages/Feed',
  component: Feed,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock),
  mockApolloResult<MyMixdownsQuery>(MyMixdownsDocument, MyMixdownsMock),
  mockApolloResult<MyFeedQuery>(MyFeedDocument, FeedItemsByHandleMock),
  mockApolloResult<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, FeedItemByIdMockFoo, {
    id: 'foo'
  }),
  mockApolloResult<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, FeedItemByIdMockBar, {
    id: 'bar'
  }),
  mockApolloResult<CreateFeedItemMutation, CreateFeedItemMutationVariables>(CreateFeedItemDocument, CreateFeedItemMock, {
    me: 'foo',
    text: 'Test',
  }),
  mockApolloResult<MeQuery>(MeDocument, MeMock),
]);