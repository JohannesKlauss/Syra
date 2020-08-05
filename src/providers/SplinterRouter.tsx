import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../ui/screens/Home';
import NewProject from '../ui/screens/NewProject';
import useAudioContext from '../hooks/audio/useAudioContext';

function SplinterRouter() {
  const audioContext = useAudioContext();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"}>
          {audioContext.state === 'running' ? <Home/> : <Redirect to={'/new'}/>}
        </Route>
        <Route path={"/new"}>
          <NewProject/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default SplinterRouter;
