import { PixiComponent, Stage, useTick } from '@inlet/react-pixi';
import React, { useContext, useState } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { Flex, useTheme } from '@chakra-ui/react';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilValue } from 'recoil';
import { Graphics } from 'pixi.js';
import { colorToHexNumber } from '../../../utils/color';
import { useMotionValue } from 'framer-motion';
import { ChannelMode } from '../../../types/Channel';
import useSyraEngine from "../../../hooks/engine/useSyraEngine";
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";
import { mapDbToUiMeterVal } from "../../../utils/levelMeterMapping";
import { AbstractChannel } from "../../../engine/channels/AbstractChannel";

const BAR_HEIGHT = 160;

interface PixiProps {
  x: number;
  y: number;
  height: number;
  width: number;
  safeColor: number;
  dangerColor: number;
  clippingColor: number;
}

const Bar = PixiComponent<PixiProps, Graphics>('Bar', {
  create: () => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, height, width, safeColor, dangerColor, clippingColor } = props;

    instance.clear();
    instance.beginFill(safeColor);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});

interface StripProps {
  channelCount: number;
  index: number;
  safeColor: string;
  dangerColor: string;
  clippingColor: string;
  channel: AbstractChannel;
}

const Strip: React.FC<StripProps> = ({ channelCount, index, channel, safeColor, dangerColor, clippingColor }) => {
  const [heightLeft, setHeightLeft] = useState(160);
  const [heightRight, setHeightRight] = useState(160);


  useTick(() => {
    if (channelCount === 1 && !(channel.rmsValue as number[]).length) {
      setHeightLeft(mapDbToUiMeterVal(channel.rmsValue as number));
    } else {
      setHeightLeft(mapDbToUiMeterVal((channel.rmsValue as number[])[0]));
      setHeightRight(mapDbToUiMeterVal((channel.rmsValue as number[])[1]));
    }
  });

  return (
    <Bar
      width={channelCount === 1 ? 28 : 12}
      height={index === 0 ? heightLeft : heightRight}
      x={index * 16}
      y={BAR_HEIGHT - (index === 0 ? heightLeft : heightRight)}
      safeColor={colorToHexNumber(safeColor)}
      dangerColor={colorToHexNumber(dangerColor)}
      clippingColor={colorToHexNumber(clippingColor)}
    />
  );
};

const LevelMeterBarV2: React.FC = () => {
  const theme = useTheme();
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const mode = useRecoilValue(channelStore.mode(channelId));

  return (
    <Flex w={'100%'} h={BAR_HEIGHT} mt={8} pos={'relative'} overflow={'hidden'} justify={'center'}>
      <Stage width={28} height={BAR_HEIGHT} options={{ transparent: true, resolution: 1 }}>
        {mode === ChannelMode.STEREO ? (
          <>
            <Strip
              channelCount={2}
              index={0}
              channel={channel}
              safeColor={theme.colors.green[200]}
              dangerColor={theme.colors.yellow[200]}
              clippingColor={theme.colors.red[200]}
            />
            <Strip
              channelCount={2}
              index={1}
              channel={channel}
              safeColor={theme.colors.green[200]}
              dangerColor={theme.colors.yellow[200]}
              clippingColor={theme.colors.red[200]}
            />
          </>
        ) : (
          <Strip
            channelCount={1}
            index={0}
            channel={channel}
            safeColor={theme.colors.green[200]}
            dangerColor={theme.colors.yellow[200]}
            clippingColor={theme.colors.red[200]}
          />
        )}
      </Stage>
    </Flex>
  );
};

export default LevelMeterBarV2;
