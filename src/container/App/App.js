import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import NoMatch from '../../components/NoMatch/NoMatch'
import Messenger from '../../components/Messenger/messenger'
import * as ROUTES from '../../constants/routes'
import './App.css';

const App = ()  => {
  return (
    <Router>
      <Switch>
        <Redirect exact path='/' to={ROUTES.SIGN_IN} />
        <Route path={ROUTES.SIGN_IN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={Register} />
        <Route path={ROUTES.MESSENGER} component={Messenger} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
