import ProfileActions from './ProfileActions';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';

const Template = (args) => <ProfileActions {...args} />;

export default {
  title: 'molecules/Profile/ProfileActions',
  component: ProfileActions,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};