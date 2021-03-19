import React, { useContext, useEffect, useRef } from 'react';
import Konva from 'konva';
import { mapDbToUiMeterVal } from '../../../utils/levelMeterMapping';
import { ChannelContext } from '../../../providers/ChannelContext';
import { Box, useTheme } from '@chakra-ui/react';
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";

const uniqid = require('uniqid');
const METER_WIDTH = 24;

function LevelMeterVertical() {
  const containerId = useRef(uniqid('konva-container-'));
  const canvas = useRef<HTMLDivElement>(null);
  const channelId = useContext(ChannelContext);
  const theme = useTheme();
  const channel = useSyraEngineChannel(channelId);

  useEffect(() => {
    // TODO: WRITE THIS IS A CLEANER WAY, THIS IS JUST HACKED IN HERE AS A Poc.
    if (canvas.current) {
      const stage = new Konva.Stage({
        container: containerId.current,
        width: METER_WIDTH,
        height: 160,
      });

      const layer = new Konva.Layer();

      const rms = new Konva.Rect({
        x: 0,
        y: 0,
        width: METER_WIDTH,
        height: 0,
        fill: theme.colors.green[200],
        offsetY: -100,
      });

      layer.add(rms);
      stage.add(layer);

      const anim = new Konva.Animation(() => {
        const val = channel.peakValue as number;

        let rmsHeight = mapDbToUiMeterVal(val);

        if (isNaN(rmsHeight)) {
          rmsHeight = 0;
        }

        rms.height(rmsHeight);
        rms.offsetY(-160 + rmsHeight);
        rms.fill(val >= -4 ? (val >= -1 ? theme.colors.red[200] : theme.colors.yellow[200]) : theme.colors.green[200]);
      }, layer);

      anim.start();
    }
  }, [canvas, containerId, channel, theme.colors.red, theme.colors.yellow, theme.colors.green]);

  return <Box id={containerId.current} ref={canvas} w={'100%'} h={160} mt={8} overflow={'hidden'} pos={'relative'} />;
}

export default React.memo(LevelMeterVertical);
