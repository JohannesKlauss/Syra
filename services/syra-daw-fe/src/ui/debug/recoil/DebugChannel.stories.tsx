import DebugChannel from "./DebugChannel";
import * as React from "react";


const Template = (args) => <DebugChannel {...args} />;

export default {
  title: "debug/Recoil/DebugChannel",
  component: DebugChannel,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};