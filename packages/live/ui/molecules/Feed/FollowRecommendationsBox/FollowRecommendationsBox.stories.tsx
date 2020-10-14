import FollowRecommendationsBox from './FollowRecommendationsBox';
import * as React from 'react';

const Template = (args) => <FollowRecommendationsBox {...args} />;

export default {
  title: 'molecules/feed/FollowRecommendationsBox',
  component: FollowRecommendationsBox,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  recommendations: [
    {
      id: 3,
      name: 'Manuel Neufeld',
      avatar: '',
      followers: 56
    },
    {
      id: 8,
      name: 'Martin Leibelt',
      avatar: '',
      followers: 375
    },
    {
      id: 12,
      name: 'Anna Blume',
      avatar: '',
      followers: 46456
    }
  ]
};