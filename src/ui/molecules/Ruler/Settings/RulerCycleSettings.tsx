import React from 'react';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Button } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { transportStore } from '../../../../recoil/transportStore';
import { buttonInfo } from '../../../../utils/text';

function RulerCycleSettings() {
  const [isCycleActive, setIsCycleActive] = useRecoilState(transportStore.isCycleActive);

  return (
    <Button size={'small'} color={isCycleActive ? 'primary' : 'default'}
            onClick={() => setIsCycleActive(currVal => !currVal)} title={buttonInfo('Toggle Cycle', 'C')}>
      <RepeatIcon/>
    </Button>
  );
}

export default RulerCycleSettings;
