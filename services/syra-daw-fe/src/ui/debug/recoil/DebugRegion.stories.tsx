import DebugRegion from "./DebugRegion";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <DebugRegion {...args} />;

export default {
  title: "debug/Recoil/DebugRegion",
  component: DebugRegion,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};