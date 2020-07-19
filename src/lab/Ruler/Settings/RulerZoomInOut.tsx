import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { useSetRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';

interface Props {

}

function RulerZoomInOut({}: Props) {
  const setZoomLevel= useSetRecoilState(arrangeWindowStore.zoomLevel);

  return (
    <ButtonGroup variant={'text'} size={'small'}>
      <Button size={'small'} onClick={() => setZoomLevel(currVal => currVal + 1)}>
        <ZoomInIcon/>
      </Button>
      <Button size="small" onClick={() => setZoomLevel(currVal => currVal - 1)}>
        <ZoomOutIcon/>
      </Button>
    </ButtonGroup>
  );
}

export default RulerZoomInOut;
