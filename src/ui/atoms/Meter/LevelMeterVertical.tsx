import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core';
import * as Tone from 'tone';
import Konva from 'konva';
import { amber, red, teal } from '@material-ui/core/colors';
import { mapDbToUiMeterVal } from '../../../utils/levelMeterMapping';

const uniqid = require('uniqid');

const LevelMeter = styled('div')({
  width: '100%',
  height: 160,
  marginTop: 20,
  overflow: 'hidden',
  position: 'relative',
});

const METER_WIDTH = 24;

interface Props {
  toneRmsMeter: Tone.Meter;
}

function LevelMeterVertical({ toneRmsMeter }: Props) {
  const containerId = useRef(uniqid('konva-container-'));
  const canvas = useRef<HTMLDivElement>(null);

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
        fill: teal[700],
        offsetY: -100,
      });

      layer.add(rms);
      stage.add(layer);

      const anim = new Konva.Animation(() => {
        const val = toneRmsMeter.getValue() as number

        let rmsHeight = mapDbToUiMeterVal(toneRmsMeter.getValue() as number);

        if (isNaN(rmsHeight)) {
          rmsHeight = 0;
        }

        rms.height(rmsHeight);
        rms.offsetY(-160 + rmsHeight);
        rms.fill(val >= -4 ? (val >= -1 ? red[700] : amber[700]) : teal[700]);
      }, layer);

      anim.start();
    }
  }, [canvas, containerId, toneRmsMeter]);

  return (
    <LevelMeter id={containerId.current} ref={canvas}/>
  );
}

export default React.memo(LevelMeterVertical);
