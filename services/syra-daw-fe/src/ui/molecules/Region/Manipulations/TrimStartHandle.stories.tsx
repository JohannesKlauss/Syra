import TrimStartHandle from "./TrimStartHandle";
import * as React from "react";


const Template = (args) => <TrimStartHandle {...args} />;

export default {
  title: "molecules/Track/Region/Manipulations/TrimStartHandle",
  component: TrimStartHandle,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};