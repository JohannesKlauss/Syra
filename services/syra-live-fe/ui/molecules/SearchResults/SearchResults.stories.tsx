import SearchResults from './SearchResults';
import * as React from 'react';
import { mockApollo, mockApolloResult } from "../../../stories/mockApollo";
import { MeDocument, MeQuery } from "../../../gql/generated";
import { MeMock } from "../../../stories/apolloMocks/user";

const Template = (args) => <SearchResults {...args} />;

export default {
  title: 'molecules/SearchResults',
  component: SearchResults,
  argTypes: {
    searchString: { control: 'text' },
    userResults: { control: 'array' },
  },
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock)
]);

Default.args = {
  searchString: '',
  userResults: [
    { name: 'Srya Test', handle: 'syratest', avatar: '' },
    { name: 'Srya Test 2', handle: 'syratest 2', avatar: '' },
    { name: 'Srya Test 3', handle: 'syratest 3', avatar: '' },
    { name: 'Srya Test 4', handle: 'syratest 4', avatar: '' },
    { name: 'Srya Test 5', handle: 'syratest 5', avatar: '' },
  ],
};
