import LandingHero from "./LandingHero";
import React from "react";

const Template = (args) => <LandingHero {...args} />;

export default {
  title: "molecules/LandingHero",
  component: LandingHero
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  onClickSignUp: () => null,
};