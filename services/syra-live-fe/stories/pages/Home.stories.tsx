import Home from '../../pages';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';

const Template = (args) => <Home {...args} />;

export default {
  title: 'x pages/Home',
  component: Home,
  decorators: [withApolloClient],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};
