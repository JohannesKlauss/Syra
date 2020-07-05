import React from 'react';
import whyDidYouRender from "@welldone-software/why-did-you-render";

(function wdyrPatch () {
  if (process.env.NODE_ENV === 'development') {
    console.log('Patch React with wdyr');

    whyDidYouRender(React, {
      onlyLogs: true,
      titleColor: "green",
      diffNameColor: "aqua",
      trackAllPureComponents: true,
    });
  }
})();