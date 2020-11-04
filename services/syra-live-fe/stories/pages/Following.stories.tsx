import * as React from 'react';
import FollowingPage from '../../pages/following';
import { mockApolloResult } from '../mockApollo';
import { MeDocument, MeFollowingDocument, MeFollowingQuery, MeQuery } from "../../gql/generated";
import { MeFollowingMock, MeMock } from "../apolloMocks/user";
import { withApolloClient } from 'storybook-addon-apollo-client';
import { withNextRouter } from 'storybook-addon-next-router';

const Template = (args) => <FollowingPage {...args} />;

export default {
  title: 'x pages/Following',
  component: FollowingPage,
  decorators: [withApolloClient, withNextRouter],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  apolloClient: {
    mocks: [
      mockApolloResult<MeQuery>(MeDocument, MeMock),
      mockApolloResult<MeFollowingQuery>(MeFollowingDocument, MeFollowingMock)
    ],
  },
};
