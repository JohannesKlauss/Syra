import LandingHero from "./LandingHero";
import * as React from "react";

const Template = (args) => <LandingHero {...args} />;

export default {
  title: "molecules/LandingPage/LandingHero",
  component: LandingHero
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  onClickSignUp: () => null,
};