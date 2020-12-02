import DebugNodes from "./DebugNodes";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <DebugNodes {...args} />;

export default {
  title: "debug/DebugNodes",
  component: DebugNodes,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};