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
  const stream = useRef<MediaStream | null>(null);

  useEffect(() => {
    (async () => {
      if (videoRef.current && navigator.mediaDevices.getUserMedia) {
        stream.current = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream.current;
      }
    })();
  }, [videoRef, stream]);

  useEffect(() => {
    return () => {
      stream.current?.getTracks().forEach(track => track.stop());
    }
  }, []);

  return (
    <BaseContainer>
      <video width={300} autoPlay={true} ref={videoRef}/>
    </BaseContainer>
  );
}

export default Video;
