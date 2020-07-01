import React from 'react';
import { Container, InputLabel, Select } from '@material-ui/core';
import useGetDevices from '../../hooks/tone/useGetDevices';

function Devices() {
  const devices = useGetDevices();

  console.log("devices", devices);

  return (
    <Container>
      <InputLabel htmlFor="devices">Devices</InputLabel>
      <Select
        native
        inputProps={{
          name: 'devices',
          id: 'devices',
        }}
      >
        {devices.map(device => <option value={device.deviceId}>{device.label} hallo</option>)}
      </Select>
    </Container>
  );
}

export default Devices;
