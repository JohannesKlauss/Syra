import Debugger from "./Debugger";
import * as React from "react";


const Template = (args) => <Debugger {...args} />;

export default {
  title: "debug/Debugger",
  component: Debugger,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};