import AvatarMenu from './AvatarMenu';
import * as React from 'react';

const Template = (args) => <AvatarMenu {...args} />;

export default {
  title: 'molecules/feed/AvatarMenu',
  component: AvatarMenu,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  name: 'Johannes Klauss',
  avatar: '',
  hasNotifications: true
};