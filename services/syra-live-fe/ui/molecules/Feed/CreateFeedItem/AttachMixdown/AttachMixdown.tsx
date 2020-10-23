import React, { useState } from 'react';
import {
  Button,
} from '@chakra-ui/core';
import { IoMdAdd } from 'react-icons/io';
import AttachMixdownModal from '../AttachMixdownModal/AttachMixdownModal';

interface Props {
  onSelectMixdown: (mixdownId: string) => void;
}

function AttachMixdown({ onSelectMixdown }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variantColor={'teal'} leftIcon={IoMdAdd} onClick={() => setIsOpen(true)}>Attach Mixdown</Button>
      <AttachMixdownModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelectMixdownId={mixdownId => {
          setIsOpen(false);
          onSelectMixdown(mixdownId);
        }}
      />
    </>
  );
}

export default AttachMixdown;
