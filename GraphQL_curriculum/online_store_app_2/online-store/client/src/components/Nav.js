import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IS_LOGGED_IN } from '../graphql/queries';
import { Query, ApolloConsumer } from 'react-apollo';

const Nav = props => {
  return (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            // if we have some one logged in we show them a logout button
            if (data.isLoggedIn) {
              return (
                <div>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      localStorage.removeItem("auth-token")
                      client.writeData({ data: { isLoggedIn: false } });
                      props.history.push('/')
                    }}>
                  Logout
                  </button>
                  <Link to="/createProduct">Create a Product</Link>
                </div>
              )
            } else {
              return (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  );
};

export default Nav;