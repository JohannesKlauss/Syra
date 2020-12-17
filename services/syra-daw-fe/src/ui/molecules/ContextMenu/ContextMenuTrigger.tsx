import React from "react";

interface Props {

}

const ContextMenuTrigger: React.FC<Props> = ({children}) => {
  return (
    <div onContextMenu={e => e.preventDefault()}>
      {children}
    </div>
  );
};

export default ContextMenuTrigger;
