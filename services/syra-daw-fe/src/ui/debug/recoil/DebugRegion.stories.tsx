import DebugRegion from "./DebugRegion";
import * as React from "react";


const Template = (args) => <DebugRegion {...args} />;

export default {
  title: "debug/Recoil/DebugRegion",
  component: DebugRegion,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};