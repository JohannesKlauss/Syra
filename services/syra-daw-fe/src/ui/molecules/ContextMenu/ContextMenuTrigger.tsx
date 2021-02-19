import React from "react";

interface Props {
  onOpen?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ContextMenuTrigger: React.FC<Props> = ({onOpen, children}) => {
  const onContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    onOpen && onOpen(e);
  }

  return (
    <div onContextMenu={onContextMenu}>
      {children}
    </div>
  );
};

export default ContextMenuTrigger;
