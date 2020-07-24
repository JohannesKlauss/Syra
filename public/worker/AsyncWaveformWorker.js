const convertedDataPoints = [];

function convertToWaveformPoints(audioData) {
  const width = 300;
  const step = 32;

  for (let i = 0; i < width; i++) {
    let min = 1, max = -1;

    for (let j = 0; j < step; j++) {
      let bufferVal = 0;

      for (let k = 0; k < audioData.length; k++) {
        const data = audioData[0];

        if (Math.abs(data[(i * step) + j]) > Math.abs(bufferVal)) {
          bufferVal = data[(i * step) + j];
        }
      }

      if (bufferVal < min) {
        min = bufferVal;
      }

      if (bufferVal > max) {
        max = bufferVal;
      }
    }

    convertedDataPoints.push(Math.max(min, max));
  }

  postMessage(convertedDataPoints);
}

onmessage = ({data}) => {
  switch (data.type) {
    case 'PUSH':
      convertToWaveformPoints(data.data);
  }
}