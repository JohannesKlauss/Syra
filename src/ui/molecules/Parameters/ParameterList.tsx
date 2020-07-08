import React from 'react';
import SliderParameter from './SliderParameter';
import { SoulPatchParameter } from '../../../types/Soul';
import { useRecoilValue } from 'recoil/dist';
import { soulInstance } from '../../../recoil/selectors/channel';

interface Props {
  soulInstanceId: string;
  parameter?: SoulPatchParameter[];
}

const ParameterList: React.FC<Props> = React.memo(({soulInstanceId}) => {
  const patch = useRecoilValue(soulInstance(soulInstanceId));
  const parameters = patch?.soulPatch.descriptor.parameters;

  return (
    <>
      {(parameters || []).map(param =>
        <SliderParameter soulInstanceId={soulInstanceId} parameterId={param.id} key={param.id}/>)}
    </>
  );
});

export default React.memo(ParameterList);
