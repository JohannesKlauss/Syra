import React from 'react';
import SliderParameter from './SliderParameter';
import { SoulPatchParameter } from '../../../../types/Soul';
import { useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';
import { SimpleGrid } from '@chakra-ui/react';

interface Props {
  soulInstanceId: string;
  parameter?: SoulPatchParameter[];
}

const ParameterList: React.FC<Props> = React.memo(({soulInstanceId}) => {
  const patch = useRecoilValue(channelStore.soulInstance(soulInstanceId));
  const parameters = patch?.soulPatch.descriptor.parameters;

  return (
    <SimpleGrid columns={3} spacing={4}>
      {(parameters || []).map(param =>
        <SliderParameter soulInstanceId={soulInstanceId} parameterId={param.id} key={param.id}/>)}
    </SimpleGrid>
  );
});

export default React.memo(ParameterList);
