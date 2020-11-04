import UserListActions from "./UserListActions";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <UserListActions {...args} />;

export default {
  title: "molecules/UserList/UserListActions",
  component: UserListActions,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};