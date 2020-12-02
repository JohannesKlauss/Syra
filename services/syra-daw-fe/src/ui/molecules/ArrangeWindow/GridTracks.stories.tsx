import GridTracks from "./GridTracks";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import withChannelList from "../../../../.storybook/decorators/sbWithChannelList";

const Template = (args) => <GridTracks {...args} />;

export default {
  title: "molecules/ArrangeWindow/GridTracks",
  component: GridTracks,
  decorators: [withApolloClient, withChannelList]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};