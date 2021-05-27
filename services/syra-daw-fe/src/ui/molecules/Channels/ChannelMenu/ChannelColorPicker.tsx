import React, { useMemo } from "react";
import { CirclePicker } from 'react-color';
import { useTheme } from "@chakra-ui/react";
import { channelColors } from "../../../../utils/channelColors";
import { chakraColorToHex } from "../../../../utils/color";

interface Props {
  activeColor: string;
  onChangeColor: (color: string) => void;
}

function ChannelColorPicker({ activeColor, onChangeColor }: Props) {
  const theme = useTheme();

  const colors = useMemo(() => {
    return channelColors.map(color => chakraColorToHex(color, theme.colors));
  }, [theme]);

  return (
    <CirclePicker
      width={'100%'}
      color={activeColor}
      onChangeComplete={(colorResult) => onChangeColor(colorResult.hex)} circleSize={18.6}
      colors={colors}
    />
  );
}

export default ChannelColorPicker;
