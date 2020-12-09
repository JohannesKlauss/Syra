import React from "react";
import Split from 'react-split';

interface Props {

}

const SplitPane: React.FC<Props> = ({children}) => {
  return (
    <Split direction={'vertical'} minSize={100} cursor={'row-resize'} gutterStyle={() => ({background: 'green'})} sizes={[50, 50]}>
      {children}
    </Split>
  );
};

export default SplitPane;
