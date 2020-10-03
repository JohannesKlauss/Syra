import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Badge,
  createStyles,
  fade,
  IconButton,
  InputBase,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import {useRecoilState} from "recoil";
import {projectStore} from "../../recoil/projectStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    edit: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 'calc(50vw - 255px)',
      width: 400,
    },
    editIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      right: 0,
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 0, 1, 1),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      textAlign: 'center',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }),
);

function TopBar() {
  const classes = useStyles();
  const [name, setName] = useRecoilState(projectStore.name);

  return (
    <div>
      <AppBar color={'transparent'}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Syra
          </Typography>
          <div className={classes.edit}>
            <InputBase
              value={name}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={e => {
                setName(e.target.value);
                document.title = `Syra - ${e.target.value}`;
              }}
            />
            <div className={classes.editIcon}>
              <EditIcon />
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton edge="end" color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
