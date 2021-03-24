import { PixiComponent, useTick } from '@inlet/react-pixi';
import React, { useContext, useState } from "react";
import { ChannelContext } from '../../../providers/ChannelContext';
import { Flex, useTheme } from '@chakra-ui/react';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilValue } from "recoil";
import { Graphics } from 'pixi.js';
import { colorToHexNumber } from "../../../utils/color";
import { ChannelMode } from '../../../types/Channel';
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";
import { mapDbToUiMeterVal } from "../../../utils/levelMeterMapping";
import LevelMeterStage from "./LevelMeterStage";

const BAR_HEIGHT = 160;

interface PixiProps {
  x: number;
  y: number;
  height: number;
  width: number;
  color: number;
}

const Bar = PixiComponent<PixiProps, Graphics>('Bar', {
  create: () => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, height, width, color } = props;

    instance.clear();
    instance.beginFill(color);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});

interface StripProps {
  channelCount: number;
  index: number;
  safeColor: number;
  dangerColor: number;
  clippingColor: number;
  channelId: string;
}

const Strip: React.FC<StripProps> = ({ channelCount, index, channelId, safeColor, dangerColor, clippingColor }) => {
  const [height, setHeight] = useState(160);
  const [color, setColor] = useState(safeColor);
  const channel = useSyraEngineChannel(channelId);

  const determineColor = (dbValue: number) => {
    if (dbValue < -2) {
      setColor(safeColor)
    } else if (dbValue < 0) {
      setColor(dangerColor);
    } else {
      setColor(clippingColor);
    }
  };

  useTick(() => {
    const val = channel.rmsValue;

    if (channelCount === 1 && !(val as number[]).length) {
      setHeight(mapDbToUiMeterVal(val as number));
      determineColor(val as number);
    } else if (channelCount === 2 && (val as number[]).length) {
      setHeight(mapDbToUiMeterVal((val as number[])[index]));
      determineColor((val as number[])[index]);
    }
  });

  return (
    <Bar
      width={channelCount === 1 ? 28 : 12}
      height={height}
      x={index * 16}
      y={BAR_HEIGHT - height}
      color={color}
    />
  );
};

const LevelMeterBarV2: React.FC = () => {
  const theme = useTheme();
  const channelId = useContext(ChannelContext);
  const mode = useRecoilValue(channelStore.mode(channelId));
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <Flex w={'100%'} h={BAR_HEIGHT} mt={8} pos={'relative'} overflow={'hidden'} justify={'center'}>
      <LevelMeterStage width={28} height={BAR_HEIGHT} options={{ transparent: true, resolution: 1 }}>
        <RecoilBridge>
          {mode === ChannelMode.STEREO ? (
            <>
              <Strip
                channelCount={2}
                index={0}
                channelId={channelId}
                safeColor={colorToHexNumber(theme.colors.green[200])}
                dangerColor={colorToHexNumber(theme.colors.yellow[200])}
                clippingColor={colorToHexNumber(theme.colors.red[200])}
              />
              <Strip
                channelCount={2}
                index={1}
                channelId={channelId}
                safeColor={colorToHexNumber(theme.colors.green[200])}
                dangerColor={colorToHexNumber(theme.colors.yellow[200])}
                clippingColor={colorToHexNumber(theme.colors.red[200])}
              />
            </>
          ) : (
            <Strip
              channelCount={1}
              index={0}
              channelId={channelId}
              safeColor={colorToHexNumber(theme.colors.green[200])}
              dangerColor={colorToHexNumber(theme.colors.yellow[200])}
              clippingColor={colorToHexNumber(theme.colors.red[200])}
            />
          )}
        </RecoilBridge>
      </LevelMeterStage>
    </Flex>
  );
};

export default LevelMeterBarV2;
