import React, { useCallback } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { useHotkeys } from 'react-hotkeys-hook';
import { buttonInfo } from '../../../../utils/text';

function RulerZoomInOut() {
  const [horizontalZoomLevel, setHorizontalZoomLevel] = useRecoilState(arrangeWindowStore.horizontalZoomLevel);
  const [, setVerticalZoomLevel] = useRecoilState(arrangeWindowStore.verticalZoomLevel);

  const horizontalZoomIn = useCallback(() => setHorizontalZoomLevel(currVal => currVal < 11 ? currVal + 1 : 11), [setHorizontalZoomLevel]);
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
