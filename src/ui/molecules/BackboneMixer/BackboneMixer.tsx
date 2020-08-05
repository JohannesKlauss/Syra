import React, { useEffect } from 'react';
import { backboneMixerStore } from '../../../recoil/backboneMixerStore';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import * as Tone from 'tone';
import useAudioNodes from '../../../hooks/tone/BackboneMixer/useAudioNodes';

// This component does all the heavy lifting connecting channels, etc.. It doesn't render anything nor should it.
function BackboneMixer() {
  // const audioIn = useRecoilValue(backboneMixerStore.audioIn('dasdsa'));
//console.log('render', audioIn);

useEffect(() => {
  //console.log('nodes', getNodes('dasdsa'));
}, []);

  return null;
}

export default BackboneMixer;
