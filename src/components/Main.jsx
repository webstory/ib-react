'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import { LoginForm } from './LoginForm';
import { Submissions } from './Submissions';

import 'app.css!';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        username: window.localStorage.getItem("username") || "",
        sid: window.localStorage.getItem("sid") || "",
      }
    }
  }

  onUserUpdate(data) {
    this.setState({user:data});
  }

  render() {
    return (
      <div>
        <LoginForm onUpdate={this.onUserUpdate.bind(this)} />
        <Submissions username={this.state.user.username} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));