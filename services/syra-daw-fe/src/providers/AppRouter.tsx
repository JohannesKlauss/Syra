import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditorShell from '../ui/screens/EditorShell';
import NewProject from '../ui/screens/NewProject';
import { routes } from '../const/routes';
import { Flex, Text } from '@chakra-ui/react';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.LandingPage} exact>
          <Flex justify={'center'} align={'center'} h={'100vh'}>
            <Text fontSize={'6xl'}>No Project selected</Text>
          </Flex>
        </Route>
        <Route path={routes.NewProject} exact>
          <NewProject />
        </Route>
        <Route path={routes.EditorShell} exact>
          <EditorShell />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
