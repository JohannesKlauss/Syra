import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { styled } from '@material-ui/core';

const BaseContainer = styled('div')({
  position: 'absolute',
  bottom: 5,
  left: 5,
  cursor: 'e-resize',
  width: 15,
  height: 15,
  borderRadius: 8,
  background: 'white',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CustomArrowRightAltIcon = styled(ArrowRightAltIcon)({
  width: 18,
  height: 18,
});

interface Props {
  trigger: (e: React.MouseEvent) => void;
}

const TrimStartHandle: React.FC<Props> = ({trigger}: Props) => {
  return (
    <BaseContainer onMouseDown={trigger}>
      <CustomArrowRightAltIcon/>
    </BaseContainer>
  );
};

export default React.memo(TrimStartHandle);
