import React, { useCallback, useEffect } from 'react';
import { CycleStartHandle } from './RulerCycle.styled';
import { useRecoilValue } from 'recoil/dist';
import { transportStore } from '../../../recoil/transportStore';

interface Props {
  isDragging: boolean;
}

function RulerCycleStartHandle({ isDragging }: Props) {
  const isCycleActive = useRecoilValue(transportStore.isCycleActive);

  const callback = useCallback(e => {
    console.log('e.clientX', e.clientX);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', callback);
    }

    return () => {
      window.removeEventListener('mousemove', callback);
    };
  }, [isDragging, callback]);

  return (
    <CycleStartHandle isCycleActive={isCycleActive}/>
  );
}

export default RulerCycleStartHandle;
