import DebugChannel from "./DebugChannel";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <DebugChannel {...args} />;

export default {
  title: "debug/Recoil/DebugChannel",
  component: DebugChannel,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};