import FeedStack from './FeedStack';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import { MyFeedDocument, MyFeedQuery } from '../../../../gql/generated';
import { FeedItemsByHandleMock } from '../../../../stories/apolloMocks/feedItem';

const Template = (args) => <FeedStack {...args} />;

export default {
  title: 'molecules/Feed/FeedStack',
  component: FeedStack,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
};

Default.parameters = mockApollo([
  mockApolloResult<MyFeedQuery>(MyFeedDocument, FeedItemsByHandleMock),
]);