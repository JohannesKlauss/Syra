import UserListActions from "./UserListActions";
import * as React from "react";


const Template = (args) => <UserListActions {...args} />;

export default {
  title: "molecules/UserList/UserListActions",
  component: UserListActions,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};