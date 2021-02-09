import Track from "./Track";
import * as React from "react";

import sbWithChannel from "../../../../../.storybook/decorators/sbWithChannel";
import withChannelList from "../../../../../.storybook/decorators/sbWithChannelList";
import sbWithRegion from "../../../../../.storybook/decorators/sbWithRegion";
import sbLoadAudioFile from "../../../../../.storybook/loaders/sbLoadAudioFile";

const Template = (args) => <Track {...args} />;

export default {
  title: "molecules/Track/Track",
  component: Track,
  decorators: [sbWithRegion],
  loaders: [sbLoadAudioFile],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  backgroundColor: '#2C7A7B'
};