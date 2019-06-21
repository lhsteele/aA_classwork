import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER, REGISTER_USER } from '../graphql/mutations';
import { register } from "../serviceWorker";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  updateCache(client, { data }) {
    console.log(data);
    // here we can write directly to our cache with our returned mutation data
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}

        update={(client, data) => this.updateCache(client, data)}
      >
        {register => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                register({
                  variables: {
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                  }
                });
              }}
            >
              <input
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <input
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Name"
            />
              <input
                value={this.state.password}
                onChange={this.update("password")}
                type="password"
                placeholder="Password"
              />
              <button type="submit">Log In</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }

}

export default Register;