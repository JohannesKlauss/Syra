import Footer from "./Footer";
import * as React from "react";

const Template = (args) => <Footer {...args} />;

export default {
  title: "organisms/Footer",
  component: Footer
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};