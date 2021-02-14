import FollowAction from "./FollowAction";
import * as React from "react";

const Template = (args) => <FollowAction {...args} />;

export default {
  title: "atoms/FollowAction",
  component: FollowAction,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};