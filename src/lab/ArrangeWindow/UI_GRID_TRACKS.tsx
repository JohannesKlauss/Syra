import React from 'react';
import { Box, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';

interface ArrangeWindowProps {
  windowWidth: number;
}

const BaseContainer = styled(Box)({
  overflow: 'hidden',
  backgroundColor: splinterTheme.palette.background.default,
  position: 'relative',
  height: 370,
  width: ({windowWidth}: ArrangeWindowProps) => windowWidth,
});

interface Props {

}

function UI_GRID_TRACKS({}: Props) {
  const windowWidth = useRecoilValue(arrangeWindowStore.width);

  return (
    <BaseContainer windowWidth={windowWidth}>
    </BaseContainer>
  );
}

export default UI_GRID_TRACKS;
