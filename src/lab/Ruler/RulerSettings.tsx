import React, { useMemo } from 'react';
import { Box, MenuItem, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import DropdownButton from '../../ui/atoms/Buttons/DropdownButton';
import { useRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';
import { mapNumberToNote } from '../../utils/noteMapper';

const BaseContainer = styled(Box)({
  width: '100%',
  height: 30,
  display: 'flex',
  flexFlow: 'row-reverse',
  position: 'relative',
  marginBottom: 10,
  zIndex: 20,
  backgroundColor: splinterTheme.palette.background.paper,
});

function RulerSettings() {
  const [gridSnapValue, setGridSnapValue] = useRecoilState(arrangeWindowStore.snapValue);

  const snapValueItems = useMemo(() => (
    [0.0625, 0.125, 0.25, 0.5, 1, 2, 4].map(val => (
      <MenuItem key={val} selected={val === gridSnapValue} onClick={() => setGridSnapValue(val)}>
        {mapNumberToNote(val)}
      </MenuItem>))
  ), [gridSnapValue, setGridSnapValue]);

  return (
    <BaseContainer>
      <DropdownButton onClick={() => null} menuItems={snapValueItems}>
        {mapNumberToNote(gridSnapValue)}
      </DropdownButton>
    </BaseContainer>
  );
}

export default RulerSettings;
