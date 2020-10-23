import FeedItemActions from './FeedItemActions';
import * as React from 'react';

const Template = (args) => <FeedItemActions {...args} />;

export default {
  title: 'molecules/feed/feedItem/FeedItemActions',
  component: FeedItemActions,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  listens: 465,
  likes: 154,
};