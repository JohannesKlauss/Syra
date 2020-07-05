import React, { ChangeEvent, useCallback, useState } from 'react';
import { SoulPatchParameter } from '../types/SoulPatchDescriptor';

interface Props {
  parameter: SoulPatchParameter;
  port: MessagePort;
}

function SliderParameter({ parameter, port }: Props) {
  const { minValue, maxValue, index, initialValue, step, text, unit, id } = parameter;

  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const normalizedValue = parseInt(e.target.value);

    setValue(normalizedValue);

    port.postMessage({
      type: 'PARAMETER_UPDATE',
      value: {
        parameterId: index,
        normalisedValue: normalizedValue,
      },
    });
  }, [port, index]);
  
  console.log(process.env.NODE_ENV);

  return (
    <div>
      <label htmlFor={id}>
        {text}
        <input type={'range'} min={minValue} max={maxValue} defaultValue={initialValue as number} step={step} id={id}
               onChange={onChange}/>
        {value} {unit}
      </label>
    </div>
  );
}

export default SliderParameter;
