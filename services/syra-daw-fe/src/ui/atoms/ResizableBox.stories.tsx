import ResizableBox from "./ResizableBox";
import * as React from "react";

const Template = (args) => <ResizableBox {...args} />;

export default {
  title: "atoms/ResizableBox",
  component: ResizableBox,
  decorators: [Story => <div style={{minHeight: '200px', minWidth: '200px', backgroundColor: '#333333'}}><Story/></div>]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  baseWidth: 100,
};