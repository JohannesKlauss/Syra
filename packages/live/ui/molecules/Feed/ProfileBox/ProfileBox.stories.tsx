import ProfileBox from './ProfileBox';
import * as React from 'react';

const Template = (args) => <ProfileBox {...args} />;

export default {
  title: 'molecules/feed/ProfileBox',
  component: ProfileBox,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  name: 'Johannes Klauss',
  avatar: '',
  followers: 45,
  following: 26,
};