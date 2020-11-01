import MessageAction from "./MessageAction";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <MessageAction {...args} />;

export default {
  title: "atoms/MessageAction",
  component: MessageAction,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};