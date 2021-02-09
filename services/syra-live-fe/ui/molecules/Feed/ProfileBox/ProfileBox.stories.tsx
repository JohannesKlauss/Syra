import ProfileBox from './ProfileBox';
import * as React from 'react';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import { MeDocument, MeQuery } from '../../../../gql/generated';


const Template = (args) => <ProfileBox {...args} />;

export default {
  title: 'molecules/Feed/ProfileBox',
  component: ProfileBox,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, {
    me: {
      avatar: '',
      email: 'klauss.johannes@gmail.com',
      followedByCount: 45,
      followingCount: 34,
      id: '',
      name: 'Johannes Klauss',
    }
  })
]);