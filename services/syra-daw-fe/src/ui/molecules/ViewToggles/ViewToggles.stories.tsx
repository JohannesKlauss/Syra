import ViewToggles from "./ViewToggles";
import * as React from "react";


const Template = (args) => <ViewToggles {...args} />;

export default {
  title: "molecules/ViewToggles/ViewToggles",
  component: ViewToggles,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};