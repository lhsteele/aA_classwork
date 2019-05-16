import React from 'react';
import { connect } from'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

// automate the process of letting users see certain things based on logged in status

// user logged in? Boolean === true/false depending on if there is a currentUser
// going to use this mapStateToProps for both our Routes (Auth and Protected)
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// Auth: purpose is to protect auth routes
// if a user is already logged in, redirect to the home page
// need to pass it a component, the path we're looking for, and if we're loggedIn 
// component and path will be passed down:
// <AuthRoute path="" component={} />
// object destructuring of component: lowercase component allows us to grab the value of key being passed down
// capital component will make it the capital version but allow us to get lowercase version's value

// render: we want to render different things, based on if we're logged in or not
// if we're logged in, redirect to the root path / home page
// if we're not, redirect to the Component that's being passed in from the Auth args, and pass it the props we're passing into the render function
const Auth = ({ loggedIn, path, component: Component}) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);

const Login = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Redirect to = "/login" /> : <Component {...props} />
    )}
  />
);

// withRouter will give it access to locations, history, and match
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const LoginRoute = withRouter(connect(mapStateToProps)(Login));