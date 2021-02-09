import SoulPlugin from "./SoulPlugin";
import * as React from "react";

import sbWithChannel from "../../../../.storybook/decorators/sbWithChannel";

const Template = (args) => <SoulPlugin {...args} />;

export default {
  title: "molecules/SoulPlugin/SoulPlugin",
  component: SoulPlugin,
  decorators: [sbWithChannel]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};