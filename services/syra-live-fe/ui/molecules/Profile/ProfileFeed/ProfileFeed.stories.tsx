import ProfileFeed from './ProfileFeed';
import * as React from 'react';

const Template = (args) => <ProfileFeed {...args} />;

export default {
  title: 'molecules/Profile/ProfileFeed',
  component: ProfileFeed,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};