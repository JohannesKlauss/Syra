import Benefits from "./Benefits";
import * as React from "react";

const Template = (args) => <Benefits {...args} />;

export default {
  title: "molecules/LandingPage/Benefits",
  component: Benefits
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  benefits: [
    'Advanced collaboration tools to create music',
    'Share your session with your friends',
    'All genres, levels and budgets',
    'Fast, intuitive workflow for professional results'
  ]
};