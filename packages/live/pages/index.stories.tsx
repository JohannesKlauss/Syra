import Home from "./";
import React from "react";

const Template = (args) => <Home {...args} />;

export default {
  title: "pages/Home",
  component: Home
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};