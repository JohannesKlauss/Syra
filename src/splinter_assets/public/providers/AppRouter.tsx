import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Editor from '../ui/screens/Editor';
import NewProject from '../ui/screens/NewProject';
import { routes } from '../const/routes';
import LandingPageDecider from '../ui/screens/LandingPageDecider';

function AppRouter() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path={routes.NewProject}>
          <NewProject/>
        </Route>
        <Route path={routes.Editor}>
          <Editor/>
        </Route>
        <Route path={routes.LandingPage}>
          <LandingPageDecider/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
