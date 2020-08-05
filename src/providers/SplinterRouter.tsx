import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../ui/screens/Home';
import NewProject from '../ui/screens/NewProject';
import useAudioContext from '../hooks/audio/useAudioContext';

function SplinterRouter() {
  const audioContext = useAudioContext();

  console.log('ac', audioContext.state);

  if (process.env.NODE_ENV === 'development') {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/"}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/new"}>
          <NewProject/>
        </Route>
        <Route path={"/"}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default SplinterRouter;
