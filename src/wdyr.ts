import React from 'react';

if (process.env.NODE_ENV === 'development') {
  console.log('Patch React with wdyr');

  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}