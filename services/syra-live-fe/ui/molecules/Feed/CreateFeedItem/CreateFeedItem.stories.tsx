import CreateFeedItem from './CreateFeedItem';
import * as React from 'react';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import { GetMyMixdownsDocument, GetMyMixdownsQuery, MeDocument, MeQuery } from '../../../../gql/generated';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { meMock } from '../../../../stories/apolloMocks/user';
import { GetMyMixdownsMock } from '../../../../stories/apolloMocks/mixdown';

const Template = (args) => <CreateFeedItem {...args} />;

export default {
  title: 'molecules/feed/CreateFeedItem',
  component: CreateFeedItem,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, meMock),
  mockApolloResult<GetMyMixdownsQuery>(GetMyMixdownsDocument, GetMyMixdownsMock)
]);