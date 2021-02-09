import VolumeFader from "./VolumeFader";
import * as React from "react";


const Template = (args) => <VolumeFader {...args} />;

export default {
  title: "atoms/Slider/VolumeFader",
  component: VolumeFader,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};