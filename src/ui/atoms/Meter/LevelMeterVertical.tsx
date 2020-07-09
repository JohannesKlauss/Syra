import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core';
import * as Tone from 'tone';
import Konva from 'konva';
import { teal } from '@material-ui/core/colors';

const uniqid = require('uniqid');

const LevelMeter = styled('div')({
  width: 32,
  height: 160,
  marginTop: 20,
  overflow: 'hidden',
  position: 'relative',
});

interface Props {
  toneRmsMeter: Tone.Meter;
  tonePeakMeter: Tone.Meter;
}

function LevelMeterVertical({ toneRmsMeter, tonePeakMeter }: Props) {
  const containerId = useRef(uniqid('konva-container-'));
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvas.current) {
      const stage = new Konva.Stage({
        container: containerId.current,
        width: 32,
        height: 160,
      });

      const layer = new Konva.Layer();

      const rms = new Konva.Rect({
        x: 0,
        y: 0,
        width: 12,
        height: 60,
        fill: teal[700],
        offsetY: -100,
      });

      const peak = new Konva.Rect({
        x: 0,
        y: 0,
        width: 12,
        height: 60,
        fill: teal[200],
        offsetY: -100,
      });

      layer.add(peak, rms);
      stage.add(layer);

      const anim = new Konva.Animation(() => {
        const rmsHeight = 140 - Math.abs(0.01 + (toneRmsMeter.getValue() as number));
        const peakHeight = 160 - Math.abs(0.01 + (tonePeakMeter.getValue() as number));

        rms.height(rmsHeight);
        rms.offsetY(-160 + rmsHeight);
        peak.height(peakHeight);
        peak.offsetY(-160 + peakHeight);
      }, layer);

      anim.start();
    }
  }, [canvas, containerId])

  return (
    <LevelMeter id={containerId.current} ref={canvas}/>
  );
}

export default React.memo(LevelMeterVertical);
