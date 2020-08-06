import React, { HTMLAttributes, useCallback, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';
import { styled, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChannelContext } from '../../../providers/ChannelContext';

const useStyles = makeStyles({
  '@global': {
    '@keyframes marqueeBlink': {
      'from, to': {
        opacity: 0,
      },
      [`25%`]: {
        opacity: 1
      },
      [`50%`]: {
        opacity: 1
      },
      [`75%`]: {
        opacity: 1
      },
    },
  },
});

const BaseContainer = styled('div')({
  height: '50%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  cursor: 'text',
  zIndex: 10,
});

interface MarqueeIndicatorProps {
  left: number;
}

const MarqueeIndicator = styled(
  ({ left, ...other }: MarqueeIndicatorProps & Omit<HTMLAttributes<HTMLDivElement>, keyof MarqueeIndicatorProps>) => <div {...other} />,
)<Theme, MarqueeIndicatorProps>(({left}) => ({
  borderLeft: `1px solid white`,
  height: '200%',
  marginTop: 1,
  position: 'absolute',
  left,
  animation: 'marqueeBlink 1s infinite ease-in-out',
}));

function MarqueeContainer() {
  useStyles();

  const channelId = useContext(ChannelContext);

  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const [marqueeChannelPosition, setMarqueeChannelPosition] = useRecoilState(arrangeWindowStore.marqueeChannelPosition);
  const [marqueePosition, setMarqueePosition] = useRecoilState(arrangeWindowStore.marqueePosition);
  const calcSnappedX = useSnapCtrlPixelCalc();

  const onSetMarquee = useCallback((e) => {
    const y = e.clientY - e.target.getBoundingClientRect().top;
    const x = e.clientX - e.target.getBoundingClientRect().left;

    if (y <= trackHeight / 2) {
      setMarqueePosition(calcSnappedX(x));
      setMarqueeChannelPosition(channelId);
    }
  }, [calcSnappedX, trackHeight]);

  return (
    <BaseContainer onClick={onSetMarquee}>
      {marqueePosition && marqueeChannelPosition === channelId && <MarqueeIndicator left={marqueePosition}/>}
    </BaseContainer>
  );
}

export default MarqueeContainer;
