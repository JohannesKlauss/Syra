import CommentList from './CommentList';
import * as React from 'react';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import {
  FirstLevelCommentsDocument,
  FirstLevelCommentsQuery,
  FirstLevelCommentsQueryVariables,
} from '../../../../gql/generated';
import { FirsLevelCommentsMock } from '../../../../stories/apolloMocks/comments';

const Template = (args) => <CommentList {...args} />;

export default {
  title: 'molecules/Feed/CommentList',
  component: CommentList,
  decorators: [withApolloClient],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  feedItemId: 'foo'
};

Default.parameters = mockApollo([
  mockApolloResult<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>(
    FirstLevelCommentsDocument,
    FirsLevelCommentsMock,
    {
      feedItemId: 'foo',
    },
  ),
]);
