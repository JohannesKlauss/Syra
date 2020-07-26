import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../ui/screens/Home';

function SplinterRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default SplinterRouter;
