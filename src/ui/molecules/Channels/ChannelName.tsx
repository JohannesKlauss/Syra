import React, { useContext, useState } from 'react';
import {
  ClickAwayListener,
  Paper,
  PaperProps,
  styled,
  TextField,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import { determineTextColor } from '../../../utils/color';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { useRecoilState } from 'recoil/dist';

interface CustomTypographyProps {
  channelColor?: string;
}

export const CustomTypography = styled(
  ({ channelColor, ...other }: CustomTypographyProps & Omit<TypographyProps, keyof CustomTypographyProps>) => <Typography {...other} />,
)({
  color: ({channelColor}: CustomTypographyProps) => channelColor ? determineTextColor(channelColor) : 'white',
  userSelect: 'none',
});

export const ChannelNameContainer = styled(
  ({ channelColor, ...other }: CustomTypographyProps & Omit<PaperProps, keyof CustomTypographyProps>) => <Paper {...other} />,
)({
  backgroundColor: ({channelColor}: CustomTypographyProps) => channelColor ?? 'transparent',
});

interface Props {
  backgroundColor?: string;
}

function ChannelName({backgroundColor}: Props) {
  const channelId = useContext(ChannelContext);
  const [name, setName] = useRecoilState(channelStore.name(channelId));
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <ChannelNameContainer channelColor={backgroundColor} elevation={0}>
      {isEditingName
        ? <ClickAwayListener onClickAway={() => setIsEditingName(false)}>
          <TextField size={'small'} defaultValue={name} onChange={(e) => setName(e.target.value)}/>
        </ClickAwayListener>
        : <CustomTypography
        channelColor={backgroundColor}
        variant="overline"
        display="block"
        align={'center'}
        onDoubleClick={() => setIsEditingName(true)}
      >
        {name}
      </CustomTypography>}
    </ChannelNameContainer>
  );
}

export default ChannelName;
