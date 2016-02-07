'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';

import { LoginForm } from './LoginForm';
import { Submissions } from './Submissions';

import 'app.css!';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        username: window.localStorage.getItem("username") || "",
      }
    }
  }

  onUserUpdate(data) {
    this.setState({user:data});
  }

  render() {
    let nav = null;
    const sid = window.localStorage.getItem("sid");
    if(sid) {
      nav = <div>
        <span>Logged as {this.state.user.username}</span>
        <Button bsSize="xsmall" bsStyle="danger">Logout</Button>
      </div>
    } else {
      nav = <LoginForm onUpdate={this.onUserUpdate.bind(this)} />
    }

    return (
      <div>
        {nav}
        <Submissions username={this.state.user.username} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));