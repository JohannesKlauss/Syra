import ChannelBody from "./ChannelBody";
import * as React from "react";

import sbWithChannel from "../../../../../../.storybook/decorators/sbWithChannel";
import sbWithFixedWidth from "../../../../../../.storybook/decorators/sbWithFixedWidth";

const Template = (args) => <ChannelBody {...args} />;

export default {
  title: "molecules/Channels/Horizontal/ChannelBody",
  component: ChannelBody,
  decorators: [sbWithChannel, sbWithFixedWidth(160)]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};