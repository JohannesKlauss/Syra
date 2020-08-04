import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil/dist';
import { audioSetup } from './audioSetup';
import RecoilizeDebugger from 'recoilize';
import { arrangeWindowStore } from './recoil/arrangeWindowStore';
import { audioBufferStore } from './recoil/audioBufferStore';
import { channelStore } from './recoil/channelStore';
import { keyboardMidiStore } from './recoil/keyboardMidiStore';
import { projectStore } from './recoil/projectStore';
import { regionStore } from './recoil/regionStore';
import { soulPluginStore } from './recoil/soulPluginStore';
import { transportStore } from './recoil/transportStore';

let recoilNodes: any[] = []; // THIS IS A HACK, BECAUSE IT IS SUPER HARD TO CORRECTLY TYPE OUT ALL POSSIBLE NODES.

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
    trackAllPureComponents: false,
  });

  recoilNodes = [
    //...Object.values(arrangeWindowStore),
    //...Object.values(audioBufferStore),
    //...Object.values(channelStore),
    ...Object.values(keyboardMidiStore),
    ...Object.values(projectStore),
    //...Object.values(regionStore),
    ...Object.values(soulPluginStore),
    ...Object.values(transportStore),
  ];
}

audioSetup();

const root = document.getElementById('root');

ReactDOM.render(
  <RecoilRoot>
    <App/>
  </RecoilRoot>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();