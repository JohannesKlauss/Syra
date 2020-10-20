import FeedItem from './FeedItem';
import * as React from 'react';

const Template = (args) => <FeedItem {...args} />;

export default {
  title: 'molecules/Feed/FeedItem',
  component: FeedItem,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  owner: {
    id: 2,
    name: 'Manuel Neufeld',
    avatar: ''
  },
  metaInfo: {
    id: 'audio-sdfsdfsd',
    timestamp: 1602691517,
    title: 'Experimental-Song #1',
    description: 'First experimentation steps with SYRA!'
  }
};