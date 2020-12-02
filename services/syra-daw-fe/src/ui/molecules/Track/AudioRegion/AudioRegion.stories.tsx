import AudioRegion from "./AudioRegion";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import sbWithRegion from "../../../../../.storybook/decorators/sbWithRegion";
import sbLoadAudioFile from "../../../../../.storybook/loaders/sbLoadAudioFile";

const Template = (args) => <AudioRegion {...args} />;

export default {
  title: "molecules/Track/AudioRegion",
  component: AudioRegion,
  decorators: [withApolloClient, sbWithRegion],
  loaders: [sbLoadAudioFile]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};