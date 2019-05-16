import React from 'react';

// create a local state to keep track of all the fields for the form
class Signup extends React.Component {
  constructor(props) {
    super(props);
    // default state
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // actions the form will use
  // we want the type passed in to correspond to username, email, or password
  // wrapping the key in sq brackets means it will get evaluated before it's assigned to the key 
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.state is the object from lines 8-12
    // everything we need to create a new user
    // history is a method that will become available once we wrap it all in a <Route/>
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/chirps'));
  }

  // line 45, it will call the function returned from handleInput, which will set the 
  // state to the type defined in the input value
  render() {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        <form>
          <label>Username:
            <input 
              type="text" 
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup;