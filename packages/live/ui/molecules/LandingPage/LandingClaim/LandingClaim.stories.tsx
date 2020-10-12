import LandingClaim from "./LandingClaim";
import * as React from "react";

const Template = (args) => <LandingClaim {...args} />;

export default {
  title: "molecules/LandingPage/LandingClaim",
  component: LandingClaim
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};