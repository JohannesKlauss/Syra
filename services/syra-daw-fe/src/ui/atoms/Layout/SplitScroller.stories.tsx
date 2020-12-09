import SplitScroller from './SplitScroller';
import * as React from 'react';

const Template = (args) => (
  <SplitScroller {...args}>
    <div>
      {new Array(60).fill(0).map((_, i) => (
        <div key={i} style={{ height: '20px' }}>
          LEFT {i}
        </div>
      ))}
    </div>
    <div style={{ width: 'calc(100vw - 100px)', marginLeft: '10px' }}>
      {new Array(60).fill(0).map((_, i) => {
        return (
          <div key={i} style={{ position: 'relative', height: '20px' }}>
            <div style={{ position: 'absolute', left: `${i * 40}px`, height: '20px' }}>R {i}</div>
          </div>
        );
      })}
    </div>
  </SplitScroller>
);

export default {
  title: 'atoms/Layout/SplitScroller',
  component: SplitScroller,
  decorators: [],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};
