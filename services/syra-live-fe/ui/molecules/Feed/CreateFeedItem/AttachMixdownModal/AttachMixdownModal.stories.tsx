import AttachMixdownModal from './AttachMixdownModal';
import * as React from 'react';
import { mockApollo, mockApolloResult } from '../../../../../stories/mockApollo';
import { MyMixdownsDocument, MyMixdownsQuery } from '../../../../../gql/generated';
import { MyMixdownsMock } from '../../../../../stories/apolloMocks/mixdown';
import { withApolloClient } from 'storybook-addon-apollo-client';

const Template = (args) => <AttachMixdownModal {...args} />;

export default {
  title: 'molecules/Feed/CreateFeedItem/AttachMixdownModal',
  component: AttachMixdownModal,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  isOpen: true,
}

Default.parameters = mockApollo([
  mockApolloResult<MyMixdownsQuery>(MyMixdownsDocument, MyMixdownsMock)
]);