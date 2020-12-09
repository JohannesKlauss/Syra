import SplitPane from './SplitPane';
import * as React from 'react';

const Template = (args) => (
  <div style={{ height: '400px' }}>
    <SplitPane {...args}>
      <div>
       <img src="https://via.placeholder.com/350" alt="a" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350" alt="a" />
      </div>
    </SplitPane>
  </div>
);

export default {
  title: 'atoms/SplitPane',
  component: SplitPane,
  decorators: [],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};
