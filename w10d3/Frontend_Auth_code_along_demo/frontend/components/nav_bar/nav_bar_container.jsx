import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// import logout action will allow us to create a logout button
import { logout, login } from '../../actions/session';

// pass down the currentUser to the navbar component
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

// pass down the logout action to the navbar component
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: formUser => dispatch(login(formUser))
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

