import HorizontalChannelList from "./HorizontalChannelList";
import * as React from "react";

import withChannelList from "../../../../../.storybook/decorators/sbWithChannelList";

const Template = (args) => <HorizontalChannelList {...args} />;

export default {
  title: "molecules/Channels/Horizontal/HorizontalChannelList",
  component: HorizontalChannelList,
  decorators: [withChannelList]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};