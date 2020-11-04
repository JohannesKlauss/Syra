import React from "react";
import { Skeleton } from '@chakra-ui/core';

interface Props {
  fallback?: JSX.Element;
  skeletonHeight?: number;
}

const Suspendable: React.FC<Props> = ({ children, fallback, skeletonHeight }) => {
  return <React.Suspense fallback={fallback ?? <Skeleton h={skeletonHeight} />}>{children}</React.Suspense>;
};

Suspendable.defaultProps = {
  skeletonHeight: 24,
};

export default Suspendable;
