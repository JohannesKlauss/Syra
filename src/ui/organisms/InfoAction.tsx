import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

interface Props {
  open: boolean;
  severity: 'success' | 'info' | 'warning' | 'error';
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function InfoAction({open, onConfirm, onCancel, severity, text}: Props) {
  return (
    <Snackbar open={open} autoHideDuration={15000} onClose={onCancel} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
      <Alert
        severity={severity}
        action={(
          <>
            <IconButton onClick={onCancel} size={'small'}>
              <CloseIcon/>
            </IconButton>
            <IconButton onClick={onConfirm} size={'small'}>
              <CheckIcon/>
            </IconButton>
          </>
          )}>
        {text}
      </Alert>
    </Snackbar>
  );
}

export default InfoAction;
