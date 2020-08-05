import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Editor from '../ui/screens/Editor';
import useAudioContext from '../hooks/audio/useAudioContext';
import NewProject from '../ui/screens/NewProject';
import { routes } from '../const/routes';

function SplinterRouter() {
  const audioContext = useAudioContext();

  console.log('ac', audioContext.state);

  return (
    <BrowserRouter >
      <Switch>
        <Route path={routes.NewProject}>
          <NewProject/>
        </Route>
        <Route path={routes.Editor}>
          <Editor/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default SplinterRouter;
