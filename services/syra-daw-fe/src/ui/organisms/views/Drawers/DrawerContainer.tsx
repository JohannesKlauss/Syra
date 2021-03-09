import React from "react";
import FileExplorer from "./FileExplorer/FileExplorer";

interface Props {

}

const DrawerContainer: React.FC<Props> = ({}) => {
  return (
    <>
      <FileExplorer></FileExplorer>
    </>
  );
};

export default DrawerContainer;
