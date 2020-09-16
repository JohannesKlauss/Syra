import React, { useEffect, useRef } from 'react';
import { Paper, styled } from '@material-ui/core';

const BaseContainer = styled(Paper)({
  padding: 5,
  position: 'fixed',
  zIndex: 1,
  bottom: 5,
  right: 5,
  width: 310,
});

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    (async () => {
      if (videoRef.current && navigator.mediaDevices.getUserMedia) {
        videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
      }
    })();
  }, [videoRef]);

  return (
    <BaseContainer>
      <video width={300} autoPlay={true} ref={videoRef}/>
    </BaseContainer>
  );
}

export default Video;
