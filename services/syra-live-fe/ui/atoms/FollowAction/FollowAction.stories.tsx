import FollowAction from "./FollowAction";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <FollowAction {...args} />;

export default {
  title: "atoms/FollowAction",
  component: FollowAction,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};