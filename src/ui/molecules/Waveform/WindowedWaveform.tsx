import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { styled } from '@material-ui/core';
import useAudioContext from '../../../hooks/audio/useAudioContext';
import { createWindowedWaveformV2 } from '../../../utils/waveform';
import { createNewId } from '../../../utils/createNewId';
import Konva from 'konva';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useScrollPosition from '../../../hooks/ui/useScrollPosition';
import { audioBufferStore } from '../../../recoil/audioBufferStore';
import useTrimmedRegionWidth from '../../../hooks/ui/region/useTrimmedRegionWidth';

interface WaveformProps {
  width: number; // This is to support sharp edges on retina displays.
  height: number;
}

const Waveform = styled('div')({
  width: ({ width }: WaveformProps) => width,
  height: ({ height }: WaveformProps) => height,
  willChange: 'transform',
  position: 'absolute',
  top: 0,
});

interface Props {
  buffer?: AudioBuffer | ArrayBuffer | null;
  bufferId: string | null;
  height: number;
  completeWidth: number;
  paddingLeft: number; // This is the padding created by the trimStart.
  offset: number; // This is the left prop.
  smoothing?: number;
  color?: string;
}

function WindowedWaveform({ buffer, height, completeWidth, color = '#fff', offset, paddingLeft, smoothing, bufferId }: Props) {
  const pointCloudId = `${bufferId}.${completeWidth}.${height}.${smoothing}`;

  const containerId = useRef(createNewId());
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportWidth = useRecoilValue(arrangeWindowStore.viewportWidth);
  const audioBuffer = useRef(buffer);
  const [waveformPointCloud, setWaveformPointCloud] = useRecoilState(audioBufferStore.waveform(pointCloudId));
  const audioContext = useAudioContext();
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);
  const currentScrollPos = useRef(0);
  const trimmedWidth = useTrimmedRegionWidth();

  if (audioBuffer.current instanceof AudioBuffer && waveformPointCloud.length === 0 && completeWidth > 0) {
    setWaveformPointCloud(createWindowedWaveformV2(audioBuffer.current, completeWidth, height, smoothing));
  }

  const konvaStage = useRef<Konva.Stage>();
  const konvaLayer = useRef(new Konva.Layer({
    offsetX: paddingLeft + offset,
    clipWidth: Math.min(viewportWidth, trimmedWidth),
  }));
  const konvaPolygon = useRef(new Konva.Line({
    points: [],
    fill: color,
    closed: true,
    shadowForStrokeEnabled: false,
  }));

  const offsetChange = useCallback((pos?: number) => {
    if (containerRef.current && konvaLayer.current && konvaStage.current) {
      if (pos) {
        currentScrollPos.current = pos;
      }

      const translateX = Math.max(0, currentScrollPos.current - offset);
      const width = translateX > trimmedWidth - viewportWidth ? Math.min(viewportWidth, trimmedWidth) - translateX : Math.min(viewportWidth, trimmedWidth);

      if (width > 4) {
        containerRef.current.style.setProperty('left', `${translateX - 2}px`);
        containerRef.current.style.setProperty('width', `${width}px`);

        konvaStage.current.setAttr('width', width);
        konvaLayer.current.setAttr('offsetX', translateX - 2 + paddingLeft);

        requestAnimationFrame(() => konvaLayer.current.draw());
      }
    }
  }, [offset, paddingLeft, currentScrollPos, viewportWidth, trimmedWidth]);

  useScrollPosition(offsetChange, [offsetChange], arrangeWindowRef);

  useEffect(() => {
    offsetChange();
  }, [offsetChange]);

  // Connect the konva instances.
  useEffect(() => {
    konvaStage.current = new Konva.Stage({
      container: containerId.current,
      width: Math.min(viewportWidth, trimmedWidth),
      height,
    });

    konvaLayer.current.add(konvaPolygon.current);
    konvaStage.current?.add(konvaLayer.current);
  }, []);

  // When the buffer changes we decode it.
  useEffect(() => {
    if (buffer) {
      (async () => {
        audioBuffer.current = (buffer instanceof ArrayBuffer) ? await audioContext.decodeAudioData(buffer) : buffer;
      })();
    }
  }, [buffer, audioContext, audioBuffer]);

  // When the color changes we update it.
  useLayoutEffect(() => {
    konvaPolygon.current?.fill(color);
    konvaLayer.current.draw();
  }, [color, konvaPolygon, konvaLayer]);

  // Update width and height of stage.
  useLayoutEffect(() => {
    konvaStage.current?.setAttrs({
      width: Math.min(viewportWidth, trimmedWidth),
      height,
    });
  }, [viewportWidth, trimmedWidth, height, konvaStage]);

  // Recalculate the wave form or get it from the debug cache.
  useEffect(() => {
    if (waveformPointCloud.length !== 0) {
      konvaPolygon.current.setAttr('points', waveformPointCloud);
      konvaLayer.current.draw();
    }
  }, [konvaLayer, konvaPolygon, waveformPointCloud]);

  return (
    <Waveform id={containerId.current} ref={containerRef} width={Math.min(viewportWidth, trimmedWidth)} height={height}/>
  );
}

WindowedWaveform.whyDidYouRender = true;

export default React.memo(WindowedWaveform);
