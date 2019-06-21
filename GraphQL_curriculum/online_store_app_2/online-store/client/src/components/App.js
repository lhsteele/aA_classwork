import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Route, Switch} from 'react-router-dom'
import ProductIndex from './products/ProductIndex'
import Login from './login';
import Register from './register'
import AuthRoute from '../util/route_util'
import Nav from './Nav';
import ProductDetail from './products/ProductDetail';
import CreateProduct from './products/CreateProduct';


const App = () => {
  return (
    <div>
      <Route path="/" component={Nav} />
      <h1>Online Store</h1>
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth"/>
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <Route exact path="/" component={ProductIndex} />
        <Route exact path="/products/:productId" component={ProductDetail} />
        <Route exact path="/createProduct" component={CreateProduct} />
      </Switch>
    </div>
  );
};

export default App;