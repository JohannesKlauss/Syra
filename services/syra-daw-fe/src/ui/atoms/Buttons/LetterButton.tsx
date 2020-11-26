import React from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
  isActive?: boolean;
  color: string;
}

const LetterButton: React.FC<Props> = React.memo(({ onClick, isActive, color, children }) => {
  return (
    <Button variant={isActive ? 'solid' : 'ghost'} isActive={isActive} size="sm" colorScheme={color} onClick={onClick}>
      {children}
    </Button>
  );
});

export default LetterButton;
