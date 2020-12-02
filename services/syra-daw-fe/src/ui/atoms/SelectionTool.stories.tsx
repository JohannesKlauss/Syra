import SelectionTool from "./SelectionTool";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <SelectionTool {...args} />;

export default {
  title: "atoms/SelectionTool/SelectionTool",
  component: SelectionTool,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  children: <div style={{ width: "100vw", height: "100vh", backgroundColor: 'black', position: "relative" }}/>
};