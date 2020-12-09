import ArrangeWindow from "./ArrangeWindow";
import * as React from "react";


const Template = (args) => <ArrangeWindow {...args} />;

export default {
  title: "molecules/ArrangeWindow",
  component: ArrangeWindow,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};