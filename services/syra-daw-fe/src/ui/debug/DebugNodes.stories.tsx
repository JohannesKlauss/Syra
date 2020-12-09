import DebugNodes from "./DebugNodes";
import * as React from "react";


const Template = (args) => <DebugNodes {...args} />;

export default {
  title: "debug/DebugNodes",
  component: DebugNodes,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};