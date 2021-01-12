import React from "react";
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import RegionFirstLoop from "../RegionFirstLoop";

interface Props {
}

const ManipulationContainer: React.FC<Props> = ({children}) => {
  const color = useRegionColor(false);

  return (
    <RegionFirstLoop color={color}>
      {children}
    </RegionFirstLoop>
  );
};

export default ManipulationContainer;
