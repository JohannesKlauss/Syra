import React from 'react';
import { styled } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const BaseContainer = styled('div')({
  position: 'absolute',
  bottom: 5,
  right: 5,
  cursor: 'w-resize',
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
  transform: 'scaleX(-1)',
});

interface Props {
  trigger: (e: React.MouseEvent) => void;
}

const TrimEndHandle: React.FC<Props> = ({trigger}: Props) => {
  return (
    <BaseContainer onMouseDown={trigger}>
      <CustomArrowRightAltIcon/>
    </BaseContainer>
  );
};

export default React.memo(TrimEndHandle);
