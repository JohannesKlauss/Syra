import React, { useCallback } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import { useHotkeys } from 'react-hotkeys-hook';

function RulerZoomInOut() {
  const [zoomLevel, setZoomLevel] = useRecoilState(arrangeWindowStore.zoomLevel);

  const zoomIn = useCallback(() => setZoomLevel(currVal => currVal < 11 ? currVal + 1 : 11), [setZoomLevel]);
  const zoomOut = useCallback(() => setZoomLevel(currVal => currVal > 1 ? currVal - 1 : 1), [setZoomLevel]);

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
      <Button size={'small'} onClick={zoomIn} disabled={zoomLevel === 11}>
        <ZoomInIcon/>
      </Button>
      <Button size="small" onClick={zoomOut} disabled={zoomLevel === 1}>
        <ZoomOutIcon/>
      </Button>
    </ButtonGroup>
  );
}

export default RulerZoomInOut;
