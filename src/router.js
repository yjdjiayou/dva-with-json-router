import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import routesConfig from './routesConfig';
import {renderRoutes} from './utils/routes';
function RouterConfig({ history,app }) {
  console.log('app',app);
  return (
    <Router history={history}>
      <Switch>
        {/**<Route path="/" render={props=><IndexPage {...props} routes={routes}/>} /> */}
        {renderRoutes(routesConfig,app)}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
