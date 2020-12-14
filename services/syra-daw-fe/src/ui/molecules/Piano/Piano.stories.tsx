import Piano from "./Piano";
import * as React from "react";


const Template = (args) => <Piano {...args} />;

export default {
  title: "molecules/Piano",
  component: Piano,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});
export const Vertical = Template.bind({});

Default.args = Vertical.args = {
  min: 36,
  max: 67
};

Vertical.args = {
  ...Vertical.args,
  renderVertical: true,
}