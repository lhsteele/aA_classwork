import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

// Signup component doesn't need access to state, so we just need
// to pass down the action to sign up a user

// passing down createNewUser inside props
// this.props.createNewUser
const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);