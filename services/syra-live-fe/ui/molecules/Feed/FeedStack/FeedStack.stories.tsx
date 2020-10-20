import FeedStack from './FeedStack';
import * as React from 'react';

const Template = (args) => <FeedStack {...args} />;

export default {
  title: 'molecules/feed/FeedStack',
  component: FeedStack,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  items: [
    {
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
    },
    {
      owner: {
        id: 3,
        name: 'Martin Leibelt',
        avatar: ''
      },
      metaInfo: {
        id: 'audio-sdfsdfsdasd',
        timestamp: 1602541517,
        title: 'Klimperei für lang',
        description: 'Being the Klimpergung I am 👌!'
      }
    }
  ]
};