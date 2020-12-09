import RulerSettings from "./RulerSettings";
import * as React from "react";


const Template = (args) => <RulerSettings {...args} />;

export default {
  title: "molecules/Ruler/Settings/RulerSettings",
  component: RulerSettings,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};