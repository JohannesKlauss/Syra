import React, { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  severity: 'success' | 'info' | 'warning' | 'error';
  show: boolean;
  text: string;
}

function InfoBox({ severity, text, show }: Props) {
  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show, setIsOpen]);

  const close = () => setIsOpen(false);

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={close} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
      <Alert
        severity={severity}
        onClick={close}
        action={(
          <IconButton onClick={close} size={'small'}>
            <CloseIcon/>
          </IconButton>)}>
        {text}
      </Alert>
    </Snackbar>
  );
}

export default InfoBox;
