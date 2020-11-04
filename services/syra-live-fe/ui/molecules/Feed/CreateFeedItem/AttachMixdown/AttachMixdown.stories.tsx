import AttachMixdown from './AttachMixdown';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../../stories/mockApollo';
import {
  MyMixdownsDocument,
  MyMixdownsQuery,
} from '../../../../../gql/generated';
import { MyMixdownsMock } from '../../../../../stories/apolloMocks/mixdown';

const Template = (args) => <AttachMixdown {...args} />;

export default {
  title: 'molecules/Feed/CreateFeedItem/AttachMixdown',
  component: AttachMixdown,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = mockApollo([
  mockApolloResult<MyMixdownsQuery>(MyMixdownsDocument, MyMixdownsMock)
]);