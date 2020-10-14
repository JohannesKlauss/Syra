import FeedItemAudio from './FeedItemAudio';
import * as React from 'react';

const Template = (args) => <FeedItemAudio {...args} />;

export default {
  title: 'molecules/feed/FeedItemAudio',
  component: FeedItemAudio,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  owner: {
    id: 2,
    name: 'Manuel Neufeld',
    avatar: ''
  },
  name: 'Sandö',
  src: '/assets/audio/1080463472.mp3',
  views: 12700,
  id: 'audio-4354654'
};