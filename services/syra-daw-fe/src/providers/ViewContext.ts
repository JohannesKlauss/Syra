import React, { RefObject } from "react";
import { View } from "../types/View";

export const ViewContext = React.createContext<{
  viewRef: RefObject<HTMLElement>,
  view: View,
}>({
  viewRef: React.createRef(),
  view: View.ARRANGE_WINDOW,
});