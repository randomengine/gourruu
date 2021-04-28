import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// import Home from '../Containers/Pages/Home';
import NotFound from '../Containers/Pages/Errors/NotFound';
import SignIn from '../Containers/Pages/SignIn/SignIn';
import Dashboard from '../Containers/Pages/Dashboard/Dashboard';
import Profile from '../Containers/Pages/Profile/Profile';
import UserList from '../Containers/Pages/Users/UserList';

class Route extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <PublicRoute restricted={false} component={Home} path="/" exact /> */}
          {/* <PublicRoute restricted={true} component={NotFound} path="/*" /> */}
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={Dashboard} path="/" exact />
          <PrivateRoute component={Profile} path="/profile" exact />
          <PrivateRoute component={UserList} path="/userlist" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Route;