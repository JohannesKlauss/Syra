import React from 'react';
import { useRecoilValue } from 'recoil';
import { editorStore } from '../../../recoil/editorStore';
import useUpdateView from '../../../hooks/recoil/editor/useUpdateView';
import { useHotkeys } from 'react-hotkeys-hook';
import { View } from '../../../types/View';
import { buttonInfo } from '../../../utils/text';
import { Button, Flex, IconButton } from '@chakra-ui/react';
import { CgPiano } from 'react-icons/cg';
import { MdTune } from 'react-icons/md';

function ViewToggles() {
  const updateView = useUpdateView();

  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  useHotkeys('p', () => updateView(View.PIANO_ROLL));
  useHotkeys('x', () => updateView(View.MIXER));

  return (
    <Flex>
      <IconButton
        icon={<CgPiano />}
        aria-label={'Toggle Piano view'}
        onClick={() => updateView(View.PIANO_ROLL)}
        title={buttonInfo('Toggle Piano roll', 'P')}
        colorScheme={showPianoRoll ? 'teal' : 'gray'}
        variant={'ghost'}
      />
      <IconButton
        icon={<MdTune/>}
        aria-label={'Toggle Mixer view'}
        onClick={() => updateView(View.MIXER)}
        colorScheme={showMixer ? 'teal' : 'gray'}
        variant={'ghost'}
        title={buttonInfo('Toggle Mixer', 'X')}
      />
    </Flex>
  );
}

export default ViewToggles;
