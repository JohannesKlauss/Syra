import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { editorStore } from '../../../recoil/editorStore';
import useUpdateView from '../../../hooks/recoil/editor/useUpdateView';
import { useHotkeys } from 'react-hotkeys-hook';
import { WindowView } from '../../../types/WindowView';
import { buttonInfo } from '../../../utils/text';
import { Flex, IconButton } from '@chakra-ui/react';
import { CgPiano } from 'react-icons/cg';
import { MdSettings } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';

function ViewToggles() {
  const updateView = useUpdateView();

  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const setShowSettings = useSetRecoilState(editorStore.showSettings);

  useHotkeys('p', () => updateView(WindowView.PIANO_ROLL));
  useHotkeys('x', () => updateView(WindowView.MIXER));
  useHotkeys('cmd+,', (e) => {
    e.preventDefault();
    e.stopPropagation();

    setShowSettings(true);
  });

  return (
    <Flex mr={16}>
      <IconButton
        icon={<CgPiano />}
        aria-label={'Toggle Piano view'}
        onClick={() => updateView(WindowView.PIANO_ROLL)}
        title={buttonInfo('Toggle Piano roll', 'P')}
        colorScheme={showPianoRoll ? 'teal' : 'gray'}
        variant={'ghost'}
      />
      <IconButton
        icon={<GoSettings/>}
        aria-label={'Toggle Mixer view'}
        onClick={() => updateView(WindowView.MIXER)}
        colorScheme={showMixer ? 'teal' : 'gray'}
        variant={'ghost'}
        title={buttonInfo('Toggle Mixer', 'X')}
      />
      <IconButton
        icon={<MdSettings/>}
        aria-label={'Open Settings'}
        onClick={() => setShowSettings(true)}
        colorScheme={'gray'}
        variant={'ghost'}
        title={buttonInfo('Open Settings', 'Cmd + ,')}
      />
    </Flex>
  );
}

export default ViewToggles;
