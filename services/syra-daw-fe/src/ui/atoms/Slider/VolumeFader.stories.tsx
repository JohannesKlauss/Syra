import VolumeFader from "./VolumeFader";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <VolumeFader {...args} />;

export default {
  title: "atoms/Slider/VolumeFader",
  component: VolumeFader,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};