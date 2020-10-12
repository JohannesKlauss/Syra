import Stopper from "./Stopper";
import * as React from "react";

const Template = (args) => <Stopper {...args} />;

export default {
  title: "organisms/Stopper",
  component: Stopper
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};