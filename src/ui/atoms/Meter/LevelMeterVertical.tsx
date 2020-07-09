import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core';
import * as Tone from 'tone';
import { makeStyles } from '@material-ui/core/styles';
import { dBToAmplitude } from '../../../utils/audio';

interface LevelBarProps {
  transformValue: number;
}

const LevelMeter = styled('div')({
  width: 16,
  height: 160,
  padding: 20,
  marginTop: 20,
  overflow: 'hidden',
  position: 'relative',
});

const Peak = styled('div')({
  transform: ({ transformValue }: LevelBarProps) => `translateY(${100 - transformValue}%)`,
  zIndex: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  bottom: 0,
  position: 'absolute',
  transition: 'transform 0.2s linear',
  transformOrigin: 'left',
});

const Rms = styled('div')({
  transform: ({ transformValue }: LevelBarProps) => `translateY(${100 - transformValue}%)`,
  zIndex: 2,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  bottom: 0,
  position: 'absolute',
  transition: 'transform 0.2s linear',
  transformOrigin: 'left',
});

const useStyles = makeStyles(theme => ({
  peak: {
    backgroundColor: theme.palette.primary.light,
  },
  rms: {
    backgroundColor: theme.palette.primary.main,
  }
}));

interface Props {
  toneRmsMeter: Tone.Meter;
  tonePeakMeter: Tone.Meter;
}

function LevelMeterVertical({ toneRmsMeter, tonePeakMeter }: Props) {
  const classes = useStyles();
  const [rms, setRms] = useState(80 - Math.abs(toneRmsMeter.getValue() as number));
  const [peak, setPeak] = useState(80 - Math.abs(tonePeakMeter.getValue() as number));

  /*useEffect(() => {
    const interval = setInterval(() => {
      setRms(80 - Math.abs(toneRmsMeter.getValue() as number));
      setPeak(80 - Math.abs(tonePeakMeter.getValue() as number));
    }, 20);

    return () => clearInterval(interval);
  }, []);*/

  console.log('rms', rms);

  return (
    <LevelMeter>
      <Rms transformValue={rms} className={classes.rms}/>
      <Peak transformValue={peak} className={classes.peak}/>
    </LevelMeter>
  );
}

export default LevelMeterVertical;
