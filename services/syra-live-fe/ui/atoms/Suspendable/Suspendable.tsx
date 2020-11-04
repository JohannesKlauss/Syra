import React from "react";
import { Skeleton } from '@chakra-ui/core';

interface Props {
  loadingComponent?: JSX.Element;
}

const Suspendable: React.FC<Props> = ({ children, loadingComponent }) => {
  return <React.Suspense fallback={loadingComponent ?? <Skeleton h={24} />}>{children}</React.Suspense>;
};

export default Suspendable;
