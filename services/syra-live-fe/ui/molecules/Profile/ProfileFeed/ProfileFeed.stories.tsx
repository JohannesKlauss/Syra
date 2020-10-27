import ProfileFeed from './ProfileFeed';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import {
  FeedItemsByHandleDocument,
  FeedItemsByHandleQuery,
  FeedItemsByHandleQueryVariables,
} from '../../../../gql/generated';
import { FeedItemsByHandleMock } from '../../../../stories/apolloMocks/feedItem';

const Template = (args) => <ProfileFeed {...args} />;

export default {
  title: 'molecules/Profile/ProfileFeed',
  component: ProfileFeed,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  handle: 'foo'
};

Default.parameters = mockApollo([
  mockApolloResult<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>(FeedItemsByHandleDocument, FeedItemsByHandleMock, {
    handle: 'foo',
  }),
]);