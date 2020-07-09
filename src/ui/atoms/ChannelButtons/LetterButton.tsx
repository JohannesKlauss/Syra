import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onClick: () => void;
  isActive?: boolean;
  width: string | number;
  color: 'default' | 'secondary' | 'primary';
}

const LetterButton: React.FC<Props> = React.memo(({ onClick, isActive, width, color, children }) => {
  return (
    <Button variant={isActive ? 'contained' : 'text'} size="small" color={color} disableElevation={isActive}
            onClick={onClick} style={{maxWidth: width , minWidth: width}}>
      {children}
    </Button>
  );
});

export default LetterButton;
