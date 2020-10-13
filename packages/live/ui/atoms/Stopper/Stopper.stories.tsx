import Stopper from "./Stopper";
import * as React from "react";

const Template = (args) => <Stopper {...args} />;

export default {
  title: "atoms/Stopper",
  component: Stopper
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};