import FollowRecommendationsBox from './FollowRecommendationsBox';
import * as React from 'react';

const Template = (args) => <FollowRecommendationsBox {...args} />;

export default {
  title: 'molecules/Feed/FollowRecommendationsBox',
  component: FollowRecommendationsBox,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
};