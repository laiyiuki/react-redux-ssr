import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App = ({ routes }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        name={route.name}
        component={route.component}
      />
    ))}
  </Switch>
);

export default App;
