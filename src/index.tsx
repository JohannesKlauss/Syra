import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil/dist';
import * as Tone from 'tone';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
    trackAllPureComponents: true,
  });
}

async function firstClick() {
  await Tone.start();
  await Tone.context.addAudioWorkletModule('worklets/SoulWasmAudioWorkletProcessor.js', 'soul-wasm-audio-worklet-processor');

  document.body.removeEventListener('click', firstClick);
}

document.body.addEventListener('click', firstClick);

ReactDOM.render(
  <RecoilRoot>
    <App/>
  </RecoilRoot>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();