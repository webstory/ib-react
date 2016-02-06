'use strict';
import React from 'react';
import ib_query from './utils';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: window.localStorage.getItem("username") || "",
      sid: window.localStorage.getItem("sid") || ""
    }
  }

  onSubmit(e) {
    e.preventDefault();

    ib_query('https://inkbunny.net/api_login.php',
      {
        username:this.state.username,
        password:this.state.password,
      },
      (data) => {
        window.localStorage.setItem("username", this.state.username);
        window.localStorage.setItem("sid", data.sid);

        this.props.onUpdate({
          username: this.state.username,
          sid: data.sid,
        });
      },
      (status, err) => {
        console.error(status, err.toString());
      })
  }

  handleUsernameChange(e) {
    this.setState({username:e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password:e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
        <input type="password" name="password" onChange={this.handlePasswordChange.bind(this)}/>
        <input type="submit" value="Login" />
      </form>
    )
  }
}
