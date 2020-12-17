import React, { useCallback, useContext } from "react";
import {  useRecoilState } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { useHotkeys } from 'react-hotkeys-hook';
import { buttonInfo } from '../../../../utils/text';
import { Flex, IconButton } from '@chakra-ui/react';
import { VscZoomIn, VscZoomOut } from 'react-icons/vsc';
import { ViewContext } from "../../../../providers/ViewContext";
import { gridStore } from "../../../../recoil/gridStore";

function RulerZoomInOut() {
  const { view } = useContext(ViewContext);
  const [horizontalZoomLevel, setHorizontalZoomLevel] = useRecoilState(gridStore.horizontalZoomLevel(view));
  const [, setVerticalZoomLevel] = useRecoilState(gridStore.verticalZoomLevel(view));

  const horizontalZoomIn = useCallback(() => setHorizontalZoomLevel((currVal) => (currVal < 14 ? currVal + 1 : 14)), [
    setHorizontalZoomLevel,
  ]);
  const horizontalZoomOut = useCallback(() => setHorizontalZoomLevel((currVal) => (currVal > 1 ? currVal - 1 : 1)), [
    setHorizontalZoomLevel,
  ]);

  useHotkeys('command+right', (e) => {
    e.preventDefault();
    horizontalZoomIn();
  });

  useHotkeys('command+left', (e) => {
    e.preventDefault();
    horizontalZoomOut();
  });

  useHotkeys('command+up', (e) => {
    e.preventDefault();
    setVerticalZoomLevel((currVal) => (currVal > 1 ? currVal - 1 : 1));
  });

  useHotkeys('command+down', (e) => {
    e.preventDefault();
    setVerticalZoomLevel((currVal) => (currVal < 11 ? currVal + 1 : 11));
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
    <Flex>
      <IconButton
        size={'sm'}
        icon={<VscZoomIn/>}
        aria-label={'Vertical Zom In'}
        onClick={horizontalZoomIn}
        disabled={horizontalZoomLevel === 11}
        title={buttonInfo('Vertical Zoom In', 'Cmd+Right')}
      />
      <IconButton
        size="sm"
        icon={<VscZoomOut/>}
        aria-label={'Vertical Zom Out'}
        onClick={horizontalZoomOut}
        disabled={horizontalZoomLevel === 1}
        title={buttonInfo('Vertical Zoom Out', 'Cmd+Left')}
      />
    </Flex>
  );
}

export default RulerZoomInOut;
