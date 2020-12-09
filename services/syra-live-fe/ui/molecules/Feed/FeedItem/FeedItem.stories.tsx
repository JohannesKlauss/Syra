import FeedItem from './FeedItem';
import * as React from 'react';
import { FeedItemByIdMockBar, FeedItemByIdMockFoo } from "../../../../stories/apolloMocks/feedItem";

import { mockApollo, mockApolloResult } from "../../../../stories/mockApollo";
import {
  FeedItemByIdDocument,
  FeedItemByIdQuery,
  FeedItemByIdQueryVariables,
  MeDocument,
  MeQuery
} from "../../../../gql/generated";
import { MeMock } from "../../../../stories/apolloMocks/user";

const Template = (args) => <FeedItem {...args} />;

export default {
  title: 'molecules/Feed/FeedItem/FeedItem',
  component: FeedItem,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  id: 'foo',
};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock),
  mockApolloResult<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, FeedItemByIdMockFoo, {
    id: 'foo'
  }),
  mockApolloResult<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, FeedItemByIdMockBar, {
    id: 'bar'
  }),
])