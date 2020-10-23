import FeedItemAudioPreview from './FeedItemAudioPreview';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../../stories/mockApollo';
import {
  MixdownDocument,
  MixdownQuery,
  MixdownQueryVariables,
} from '../../../../../gql/generated';
import { MixdownMock } from '../../../../../stories/apolloMocks/mixdown';

const Template = (args) => <FeedItemAudioPreview {...args} />;

export default {
  title: 'molecules/feed/createFeedItem/FeedItemAudioPreview',
  component: FeedItemAudioPreview,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

console.log('mock', mockApolloResult<MixdownQuery, MixdownQueryVariables>(MixdownDocument, MixdownMock, {id: 'dasdas'}));

Default.parameters = mockApollo([
  mockApolloResult<MixdownQuery, MixdownQueryVariables>(MixdownDocument, MixdownMock, {id: 'dasdas'})
]);