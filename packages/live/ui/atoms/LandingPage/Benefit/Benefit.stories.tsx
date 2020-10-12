import Benefit from "./Benefit";
import React from "react";

const Template = (args) => <Benefit {...args} />;

export default {
  title: "atoms/LandingPage/Benefit",
  component: Benefit
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  text: 'Lorem ipsum dolor sit amet.'
};