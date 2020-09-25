import React, { useCallback, useEffect } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { useHotkeys } from 'react-hotkeys-hook';
import { buttonInfo } from '../../../../utils/text';
import useSecondsToPixel from '../../../../hooks/ui/useSecondsToPixel';
import { transportStore } from '../../../../recoil/transportStore';

function RulerZoomInOut() {
  const secondsToPixel = useSecondsToPixel();

  const isRecording = useRecoilValue(transportStore.isRecording);
  const isPlaying = useRecoilValue(transportStore.isPlaying);

  const [horizontalZoomLevel, setHorizontalZoomLevel] = useRecoilState(arrangeWindowStore.horizontalZoomLevel);
  const [, setVerticalZoomLevel] = useRecoilState(arrangeWindowStore.verticalZoomLevel);

  const horizontalZoomIn = useCallback(() => setHorizontalZoomLevel(currVal => currVal < 14 ? currVal + 1 : 14), [setHorizontalZoomLevel]);
  const horizontalZoomOut = useCallback(() => setHorizontalZoomLevel(currVal => currVal > 1 ? currVal - 1 : 1), [setHorizontalZoomLevel]);

  useHotkeys('command+right', e => {
    e.preventDefault();
    horizontalZoomIn();
  });

  useHotkeys('command+left', e => {
    e.preventDefault();
    horizontalZoomOut();
  });

  useHotkeys('command+up', e => {
    e.preventDefault();
    setVerticalZoomLevel(currVal => currVal > 1 ? currVal - 1 : 1);
  });

  useHotkeys('command+down', e => {
    e.preventDefault();
    setVerticalZoomLevel(currVal => currVal < 11 ? currVal + 1 : 11)
  });

  /*const updatePlayhead = useRecoilCallback(({set, snapshot}) => () => {
    const transportSeconds = snapshot.getLoadable(transportStore.seconds).contents as number;

    set(arrangeWindowStore.playheadPosition, secondsToPixel(transportSeconds));
  }, [secondsToPixel]);*/

  /*useEffect(() => {
    if (!isRecording && !isPlaying) {
      updatePlayhead();
    }
  }, [secondsToPixel, updatePlayhead, isRecording, isPlaying]);*/

  return (
    <ButtonGroup variant={'text'} size={'small'}>
      <Button size={'small'} onClick={horizontalZoomIn} disabled={horizontalZoomLevel === 11} title={buttonInfo('Vertical Zoom In', 'Cmd+Right')}>
        <ZoomInIcon/>
      </Button>
      <Button size="small" onClick={horizontalZoomOut} disabled={horizontalZoomLevel === 1} title={buttonInfo('Vertical Zoom Out', 'Cmd+Left')}>
        <ZoomOutIcon/>
      </Button>
    </ButtonGroup>
  );
}

export default RulerZoomInOut;
