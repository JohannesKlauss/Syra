import FeedItem from './FeedItem';
import * as React from 'react';
import { FeedItemsByHandleMock } from '../../../../stories/apolloMocks/feedItem';

const Template = (args) => <FeedItem {...args} />;

export default {
  title: 'molecules/Feed/FeedItem/FeedItem',
  component: FeedItem,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  feedItem: FeedItemsByHandleMock.feedItems[0],
};