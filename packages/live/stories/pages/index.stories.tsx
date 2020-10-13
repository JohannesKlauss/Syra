import Home from "../../pages";
import * as React from "react";

const Template = (args) => <Home {...args} />;

export default {
  title: "x pages/Index",
  component: Home
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};