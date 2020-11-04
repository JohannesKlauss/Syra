import React from 'react';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  imageIcon: {
    height: '100%',
    '& > path': {
      fill: 'white',
    },
  },
  iconRoot: {
    textAlign: 'center',
    color: 'white',
  }
});

function MetronomeIcon() {
  const classes = useStyles();

  return (
    <Icon classes={{root: classes.iconRoot}}>
      <img className={classes.imageIcon} src="./icons/metronome.svg"/>
    </Icon>
  );
}

export default MetronomeIcon;
