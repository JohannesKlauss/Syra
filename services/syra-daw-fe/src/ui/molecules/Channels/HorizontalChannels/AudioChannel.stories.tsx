import AudioChannel from "./AudioChannel";
import * as React from "react";

import sbWithChannel from "../../../../../.storybook/decorators/sbWithChannel";
import sbWithFixedWidth from "../../../../../.storybook/decorators/sbWithFixedWidth";

const Template = (args) => <AudioChannel {...args} />;

export default {
  title: "molecules/Channels/Horizontal/AudioChannel",
  component: AudioChannel,
  decorators: [sbWithChannel, sbWithFixedWidth(160)]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};