import Home from "../../pages";
import React from "react";

const Template = (args) => <Home {...args} />;

export default {
  title: "x pages/Home",
  component: Home
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};