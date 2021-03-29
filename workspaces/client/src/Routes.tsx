import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/contact'} component={Contact} />
    </Switch>
  );
};

export default Routes;
