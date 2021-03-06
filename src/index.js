import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainComponents from './components/MainComponents';
import CompanyComponent from './pages/CompanyComponent';
import HomeComponent from './pages/HomeComponent';
import Login from './pages/Login';
import LogoutComponent from './pages/LogoutComponent';
import Config from './utils/Config';
import { PrivateRoute } from './utils/PrivateRoute';
import { PrivateRouteNew } from './utils/PrivateRouteNew';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path={Config.logoutPageUrl} component={LogoutComponent}></Route>
      <PrivateRouteNew exact path="/home" activepage='0' page={<HomeComponent />}></PrivateRouteNew>
      <PrivateRouteNew exact path="/company" activepage='1' page={<CompanyComponent />}></PrivateRouteNew>
    </Switch>
  </Router>
  , document.getElementById('root'))
