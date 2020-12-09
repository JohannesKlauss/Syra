import Pan from "./Pan";
import * as React from "react";


const Template = (args) => <Pan {...args} />;

export default {
  title: "atoms/Slider/Pan",
  component: Pan,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};