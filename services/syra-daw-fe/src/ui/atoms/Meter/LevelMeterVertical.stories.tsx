import LevelMeterVertical from "./LevelMeterVertical";
import * as React from "react";


const Template = (args) => <LevelMeterVertical {...args} />;

export default {
  title: "atoms/Meter/LevelMeterVertical",
  component: LevelMeterVertical,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};