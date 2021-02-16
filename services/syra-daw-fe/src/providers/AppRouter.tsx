import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditorShell from '../ui/screens/EditorShell';
import NewProject from '../ui/screens/NewProject';
import { routes } from '../const/routes';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.NewProject}>
          <NewProject />
        </Route>
        <Route path={routes.EditorShell}>
          <EditorShell />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
