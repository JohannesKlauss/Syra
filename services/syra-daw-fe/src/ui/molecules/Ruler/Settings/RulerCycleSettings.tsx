import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { MdRepeat } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { transportStore } from '../../../../recoil/transportStore';
import { buttonInfo } from '../../../../utils/text';

function RulerCycleSettings() {
  const [isCycleActive, setIsCycleActive] = useRecoilState(transportStore.isCycleActive);

  return (
    <IconButton
      aria-label={'Toggle cycle'}
      size={'sm'}
      icon={<MdRepeat />}
      colorScheme={isCycleActive ? 'teal' : 'gray'}
      onClick={() => setIsCycleActive((currVal) => !currVal)}
      title={buttonInfo('Toggle Cycle', 'C')}
    />
  );
}

export default RulerCycleSettings;
