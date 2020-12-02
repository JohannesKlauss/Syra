import LevelMeterVertical from "./LevelMeterVertical";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <LevelMeterVertical {...args} />;

export default {
  title: "atoms/Meter/LevelMeterVertical",
  component: LevelMeterVertical,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};