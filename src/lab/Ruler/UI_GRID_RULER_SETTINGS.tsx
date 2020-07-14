import React, { useMemo } from 'react';
import { Box, MenuItem, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import DropdownButton from '../../ui/atoms/Buttons/DropdownButton';
import { useRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';

const BaseContainer = styled(Box)({
  width: '100%',
  height: 20,
  backgroundColor: splinterTheme.palette.background.paper,
});

interface Props {

}

function UI_GRID_RULER_SETTINGS({}: Props) {
  const [gridSnapValue, setGridSnapValue] = useRecoilState(arrangeWindowStore.snapValue);

  const snapValueItems = useMemo(() => (
    [0.0625, 0.125, 0.25, 0.5, 1, 2, 4].map(val => (
      <MenuItem key={val} selected={val === gridSnapValue} onClick={() => setGridSnapValue(val)}>
        {val}
      </MenuItem>))
  ), [gridSnapValue, setGridSnapValue]);

  return (
    <BaseContainer>
      <DropdownButton onClick={() => null} menuItems={snapValueItems}>
        {gridSnapValue}
      </DropdownButton>
    </BaseContainer>
  );
}

export default UI_GRID_RULER_SETTINGS;
