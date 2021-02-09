import * as React from 'react';
import ChatPage from '../../pages/chat';
import { mockApolloResult } from '../mockApollo';
import {
  MeDocument,
  MeQuery,
} from '../../gql/generated';
import { MeMock } from '../apolloMocks/user';

import { withNextRouter } from 'storybook-addon-next-router';

const Template = (args) => <ChatPage {...args} />;

export default {
  title: 'x pages/Chat',
  component: ChatPage,
  decorators: [withNextRouter],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  apolloClient: {
    mocks: [mockApolloResult<MeQuery>(MeDocument, MeMock)],
  },
};
