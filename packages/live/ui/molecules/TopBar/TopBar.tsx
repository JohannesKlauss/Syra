import React from "react";
import { AppBar, Button, fade, Grid, styled, Toolbar, Typography } from "@material-ui/core";

const StyledToolBar = styled(Toolbar)(({theme}) => ({
  justifyContent: "space-between",
  zIndex: 1,
  backgroundColor: fade(theme.palette.background.paper, 0.5),
}));

interface Props {

}

function TopBar({}: Props) {
  return (
    <AppBar position={"static"} color={"transparent"}>
      <StyledToolBar>
        <div>
          <Grid container>
            <Grid item>
              <Typography variant="h6">
                Syra &nbsp; &nbsp;
              </Typography>
            </Grid>
            <Grid item>
              <Button>Studio</Button>
              <Button>Community</Button>
              <Button>Blog</Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Button>Log in</Button>
          &nbsp; &nbsp;
          <Button variant={"contained"}>Sign up</Button>
        </div>
      </StyledToolBar>
    </AppBar>
  );
}

export default TopBar;
