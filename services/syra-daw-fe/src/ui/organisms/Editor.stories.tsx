import Editor from "./Editor";
import * as React from "react";

import sbWithBackboneMixer from "../../../.storybook/decorators/sbWithBackboneMixer";

const Template = (args) => <Editor {...args} />;

export default {
  title: "screens/Editor",
  component: Editor,
  decorators: [sbWithBackboneMixer]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};