import React from 'react';
import { Button } from "@chakra-ui/core";

interface Props {
  onClick: () => void;
  isActive?: boolean;
  width: string | number;
  color: string;
}

const LetterButton: React.FC<Props> = React.memo(({ onClick, isActive, width, color, children }) => {
  return (
    <Button variant={isActive ? 'solid' : 'ghost'} size="sm" colorScheme={color}
            onClick={onClick} w={width}>
      {children}
    </Button>
  );
});

export default LetterButton;
