import UserList from "./UserList";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <UserList {...args} />;

export default {
  title: "molecules/UserList",
  component: UserList,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  users: [
    {name: 'Srya Test', handle: 'syratest', avatar: ''},
    {name: 'Srya Test 2', handle: 'syratest 2', avatar: ''},
    {name: 'Srya Test 3', handle: 'syratest 3', avatar: ''},
    {name: 'Srya Test 4', handle: 'syratest 4', avatar: ''},
    {name: 'Srya Test 5', handle: 'syratest 5', avatar: ''},
  ]
};