import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Editor from '../ui/screens/Editor';
import NewProject from '../ui/screens/NewProject';
import { routes } from '../const/routes';
import LandingPageDecider from '../ui/screens/LandingPageDecider';
import LoadSession from '../ui/screens/LoadSession';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.NewProject}>
          <NewProject />
        </Route>
        <Route path={routes.Editor}>
          <Editor />
        </Route>
        <Route path={routes.LoadSession}>
          <LoadSession />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
