import React, { useContext } from 'react';
import {
  Checkbox,
  Grid,
  Paper,
  TableCell,
  TableContainer,
  TableRow, TextField,
  Typography,
} from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { channelTypeMap } from '../../../const/channels';
import ChannelColorPicker from '../../molecules/Channels/ChannelMenu/ChannelColorPicker';

function DebugChannel() {
  const channelId = useContext(ChannelContext);
  const [name, setName] = useRecoilState(channelStore.name(channelId));
  const [type, setType] = useRecoilState(channelStore.type(channelId));
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const [isArmed, setIsArmed] = useRecoilState(channelStore.isArmed(channelId));
  const [isSolo, setIsSolo] = useRecoilState(channelStore.isSolo(channelId));
  const [isMuted, setIsMuted] = useRecoilState(channelStore.isMuted(channelId));

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <TableContainer component={Paper}>
            <TableRow>
              <TableCell>
                Id:
              </TableCell>
              <TableCell>
                {channelId}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Name:
              </TableCell>
              <TableCell>
                <TextField value={name} onChange={(e) => setName(e.target.value)} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Type:
              </TableCell>
              <TableCell>
                <Typography variant={'overline'}>{channelTypeMap[type]!.icon} {channelTypeMap[type]!.name}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Color:
              </TableCell>
              <TableCell>
                <ChannelColorPicker activeColor={color} onChangeColor={(newColor) => setColor(newColor)}/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Muted:
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={isMuted}
                  onChange={(_, newValue) => setIsMuted(newValue)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Solo:
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={isSolo}
                  onChange={(_, newValue) => setIsSolo(newValue)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Is Armed:
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={isArmed}
                  onChange={(_, newValue) => setIsArmed(newValue)}
                />
              </TableCell>
            </TableRow>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default DebugChannel;
