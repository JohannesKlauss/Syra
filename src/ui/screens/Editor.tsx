import React from 'react';
import HorizontalChannelList from '../molecules/Channels/HorizontalChannels/HorizontalChannelList';
import ArrangeWindow from '../molecules/ArrangeWindow/ArrangeWindow';
import Piano from '../molecules/Piano/Piano';
import { useHistory } from 'react-router-dom';
import useAudioContext from '../../hooks/audio/useAudioContext';
import TopBar from '../organisms/TopBar';
import WebMidiListener from '../molecules/Midi/WebMidiListener';
import { useHotkeys } from 'react-hotkeys-hook';
import { editorStore } from '../../recoil/editorStore';
import { useRecoilValue } from 'recoil/dist';
import useUpdateView from '../../hooks/recoil/editor/useUpdateView';
import { View } from '../../types/View';

const useAudioContextCheck = () => {
  const history = useHistory();
  const audioContext = useAudioContext();

  if (audioContext.state === 'suspended') {
    history.push('/new');
  }
};

function Editor() {
  useAudioContextCheck();
  const updateView = useUpdateView();

  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  useHotkeys('p', () => updateView(View.PIANO_ROLL));
  useHotkeys('x', () => updateView(View.MIXER));

  return (
      <>
        <TopBar/>
        <ArrangeWindow/>
        {showMixer && <HorizontalChannelList/>}
        {showPianoRoll && <Piano min={36} max={67}/>}
        <WebMidiListener/>
      </>
  );
}

export default Editor;
