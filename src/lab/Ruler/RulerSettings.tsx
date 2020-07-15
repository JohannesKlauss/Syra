import React, { useMemo } from 'react';
import { Box, MenuItem, styled } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import DropdownButton from '../../ui/atoms/Buttons/DropdownButton';
import { useRecoilState } from 'recoil/dist';
import { arrangeWindowStore } from '../../recoil/arrangeWindow';
import { mapNumberToNote } from '../../utils/noteMapper';

const BaseContainer = styled(Box)({
  width: '100%',
  height: 40,
  display: 'flex',
  flexFlow: 'row-reverse',
  position: 'relative',
  paddingBottom: 10,
  zIndex: 20,
  paddingRight: 10,
  borderBottom: `1px solid ${splinterTheme.palette.background.default}`,
  backgroundColor: splinterTheme.palette.background.paper,
});

function RulerSettings() {
  const [isSnapActive, setIsSnapActive] = useRecoilState(arrangeWindowStore.isSnapActive);
  const [gridSnapValue, setGridSnapValue] = useRecoilState(arrangeWindowStore.snapValue);

  const snapValueItems = useMemo(() => (
    [0.0625, 0.125, 0.25, 0.5, 1, 2, 4].map(val => (
      <MenuItem key={val} selected={val === gridSnapValue} onClick={() => setGridSnapValue(val)}>
        {mapNumberToNote(val)}
      </MenuItem>))
  ), [gridSnapValue, setGridSnapValue]);

  return (
    <BaseContainer>
      <DropdownButton color={isSnapActive ? 'primary' : 'default'} onClick={() => setIsSnapActive(currVal => !currVal)} menuItems={snapValueItems}>
        {mapNumberToNote(gridSnapValue)}
      </DropdownButton>
    </BaseContainer>
  );
}

export default RulerSettings;
