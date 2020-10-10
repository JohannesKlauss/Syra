import CenteredClaim from "./CenteredClaim";
import React from "react";

const Template = (args) => <CenteredClaim {...args} />;

export default {
  title: "molecules/CenteredClaim",
  component: CenteredClaim
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  claim: 'Syra empowers you to be creative.'
};