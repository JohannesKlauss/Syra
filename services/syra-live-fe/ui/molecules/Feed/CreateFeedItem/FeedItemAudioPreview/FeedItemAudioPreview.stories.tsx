import FeedItemAudioPreview from './FeedItemAudioPreview';
import * as React from 'react';

import { mockApollo, mockApolloResult } from '../../../../../stories/mockApollo';
import {
  MixdownDocument,
  MixdownQuery,
  MixdownQueryVariables,
} from '../../../../../gql/generated';
import { MixdownMock } from '../../../../../stories/apolloMocks/mixdown';

const Template = (args) => <FeedItemAudioPreview {...args} />;

export default {
  title: 'molecules/Feed/CreateFeedItem/FeedItemAudioPreview',
  component: FeedItemAudioPreview,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  mixdownId: 'foo'
};

Default.parameters = mockApollo([
  mockApolloResult<MixdownQuery, MixdownQueryVariables>(MixdownDocument, MixdownMock, {id: 'foo'})
]);