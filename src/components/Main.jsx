'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';
import { ib_query } from './utils';

import { Submissions } from './Submissions';

import 'app.css!';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: window.localStorage.getItem("user_id") || null,
      username: window.localStorage.getItem("username") || "guest",
      sid: window.localStorage.getItem("sid") || null,
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
        window.localStorage.setItem("user_id", data.user_id);
        window.localStorage.setItem("username", this.state.username);
        window.localStorage.setItem("sid", data.sid);

        this.props.onUpdate({
          user_id: data.user_id,
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



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.guest = {
      user_id: window.localStorage.getItem("user_id") || null,
      username: window.localStorage.getItem("username") || "guest",
      sid: window.localStorage.getItem("sid") || null,
    }

    this.state = {user: this.guest};
  }

  logout() {
    window.localStorage.clear();
    this.setState({user: this.guest});
  }

  onUserUpdate(data) {
    this.setState({user:data});
  }

  render() {
    if(!this.state) { return null; }

    const user = this.state.user;
    let nav = null;
    if(user.sid) {
      nav = <div>
        <span>Logged as {user.username}</span>
        <Button bsSize="xsmall" bsStyle="danger" onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    } else {
      nav = <LoginForm onUpdate={this.onUserUpdate.bind(this)} />
    }

    return (
      <div>
        {nav}
        <Submissions user={user} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));