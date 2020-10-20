import React from 'react';
import { CirclePicker } from 'react-color';

interface Props {
  activeColor: string;
  onChangeColor: (color: string) => void;
}

function ChannelColorPicker({ activeColor, onChangeColor }: Props) {
  return (
    <CirclePicker color={activeColor} onChangeComplete={(colorResult) => onChangeColor(colorResult.hex)} circleSize={18}/>
  );
}

export default ChannelColorPicker;
