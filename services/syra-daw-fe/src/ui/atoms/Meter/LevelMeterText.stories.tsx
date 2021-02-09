import LevelMeterText from "./LevelMeterText";
import * as React from "react";


const Template = (args) => <LevelMeterText {...args} />;

export default {
  title: "atoms/Meter/LevelMeterText",
  component: LevelMeterText,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};