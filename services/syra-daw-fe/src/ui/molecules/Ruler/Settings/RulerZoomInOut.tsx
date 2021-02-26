import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useHotkeys } from 'react-hotkeys-hook';
import { buttonInfo } from '../../../../utils/text';
import { Flex, IconButton } from '@chakra-ui/react';
import { VscZoomIn, VscZoomOut } from 'react-icons/vsc';
import { gridStore } from '../../../../recoil/gridStore';
import { View } from "../../../../types/View";

interface Props {
  view: View;
}

const RulerZoomInOut: React.FC<Props> = ({view}) => {
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

  return (
    <Flex>
      <IconButton
        size={'sm'}
        icon={<VscZoomIn />}
        aria-label={'Vertical Zom In'}
        onClick={horizontalZoomIn}
        disabled={horizontalZoomLevel === 11}
        title={buttonInfo('Vertical Zoom In', 'Cmd+Right')}
      />
      <IconButton
        size="sm"
        icon={<VscZoomOut />}
        aria-label={'Vertical Zom Out'}
        onClick={horizontalZoomOut}
        disabled={horizontalZoomLevel === 1}
        title={buttonInfo('Vertical Zoom Out', 'Cmd+Left')}
      />
    </Flex>
  );
};

export default RulerZoomInOut;
