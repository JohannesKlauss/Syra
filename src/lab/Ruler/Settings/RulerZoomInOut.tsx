import React, { useCallback } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useHotkeys } from 'react-hotkeys-hook';

function RulerZoomInOut() {
  const setZoomLevel= useSetRecoilState(arrangeWindowStore.zoomLevel);

  const zoomIn = useCallback(() => setZoomLevel(currVal => currVal + 1), [setZoomLevel]);
  const zoomOut = useCallback(() => setZoomLevel(currVal => currVal - 1), [setZoomLevel]);

  useHotkeys('command+right', e => {
    e.preventDefault();
    zoomIn();
  });

  useHotkeys('command+left', e => {
    e.preventDefault();
    zoomOut();
  });

  return (
    <ButtonGroup variant={'text'} size={'small'}>
      <Button size={'small'} onClick={zoomIn}>
        <ZoomInIcon/>
      </Button>
      <Button size="small" onClick={zoomOut}>
        <ZoomOutIcon/>
      </Button>
    </ButtonGroup>
  );
}

export default RulerZoomInOut;
