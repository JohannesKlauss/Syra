import { Flex, Slider, SliderThumb, SliderTrack, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelStore } from '../../../../recoil/channelStore';

interface Props {
  soulInstanceId: string;
  parameterId: string;
}

const SliderParameter = React.memo(({ soulInstanceId, parameterId }: Props) => {
  const patch = useRecoilValue(channelStore.soulInstance(soulInstanceId));
  const [parameter, setParameter] = useRecoilState(channelStore.soulPatchParameter({soulInstanceId, parameterId}));

  const { minValue, maxValue, index, value, step, name, unit, id } = parameter;

  const onChange = useCallback(newValue => {
    patch?.audioNode.port.postMessage({
      type: 'PARAMETER_UPDATE',
      value: {
        parameterId: index,
        normalisedValue: newValue,
      },
    });

    setParameter(currVal => ({
      ...currVal,
      value: newValue,
    }));
  }, [patch, index, setParameter]);
  
  return (
      <Flex>
          <Text>{name}</Text>
          <Slider mx={4} flex={3} value={value as number} min={minValue} max={maxValue} step={step} id={id} onChange={onChange}>
            <SliderTrack />
            <SliderThumb />
          </Slider>
          <Text>{value} {unit}</Text>
      </Flex>
  );
});

export default SliderParameter;
