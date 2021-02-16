import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { editorStore } from '../../../recoil/editorStore';
import useUpdateView from '../../../hooks/recoil/editor/useUpdateView';
import { useHotkeys } from 'react-hotkeys-hook';
import { View } from '../../../types/View';
import { buttonInfo } from '../../../utils/text';
import { Flex, IconButton } from '@chakra-ui/react';
import { CgPiano } from 'react-icons/cg';
import { MdSettings } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';
import { RiVideoChatFill } from 'react-icons/ri';

function ViewToggles() {
  const updateView = useUpdateView();

  const [showVideo, setShowVideo] = useRecoilState(editorStore.showVideo);
  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);
  const setShowSettings = useSetRecoilState(editorStore.showSettings);

  useHotkeys('p', () => updateView(View.PIANO_ROLL));
  useHotkeys('x', () => updateView(View.MIXER));
  useHotkeys('v', () => setShowVideo(currVal => !currVal));
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
        onClick={() => updateView(View.PIANO_ROLL)}
        title={buttonInfo('Toggle Piano roll', 'P')}
        colorScheme={showPianoRoll ? 'teal' : 'gray'}
        variant={'ghost'}
      />
      <IconButton
        icon={<GoSettings/>}
        aria-label={'Toggle Mixer view'}
        onClick={() => updateView(View.MIXER)}
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
      <IconButton
        icon={<RiVideoChatFill/>}
        aria-label={'Toggle Video'}
        onClick={() => setShowVideo(currVal => !currVal)}
        colorScheme={showVideo ? 'teal' : 'gray'}
        variant={'ghost'}
        title={buttonInfo('Toggle Video', 'V')}
      />
    </Flex>
  );
}

export default ViewToggles;
