import React from 'react';
import { Button, ButtonGroup, styled } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import StraightenIcon from '@material-ui/icons/Straighten';
import { useRecoilValue } from 'recoil/dist';
import { editorStore } from '../../../recoil/editorStore';
import useUpdateView from '../../../hooks/recoil/editor/useUpdateView';
import { useHotkeys } from 'react-hotkeys-hook';
import { View } from '../../../types/View';

const CustomTuneIcon = styled(TuneIcon)({
  transform: 'rotate(90deg)',
});

const BaseContainer = styled('div')({
  display: 'flex',
  flex: 1,
});

function ViewToggles() {
  const updateView = useUpdateView();

  const showMixer = useRecoilValue(editorStore.showMixer);
  const showPianoRoll = useRecoilValue(editorStore.showPianoRoll);

  useHotkeys('p', () => updateView(View.PIANO_ROLL));
  useHotkeys('x', () => updateView(View.MIXER));

  return (
    <BaseContainer>
      <ButtonGroup variant={'text'} size={'small'}>
        <Button size={'small'} onClick={() => updateView(View.PIANO_ROLL)}
                color={showPianoRoll ? 'primary' : 'default'}>
          <StraightenIcon/>
        </Button>
        <Button size="small" onClick={() => updateView(View.MIXER)} color={showMixer ? 'primary' : 'default'}>
          <CustomTuneIcon/>
        </Button>
      </ButtonGroup>
    </BaseContainer>
  );
}

export default ViewToggles;
