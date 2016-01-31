'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Table, Button } from 'react-bootstrap';
import _ from 'lodash';
import $ from 'jquery';
import 'app.css!';

function ib_query(url, params, done, fail) {
  console.log(url, params);
  const q = $.ajax({
    url:url,
    dataType:'jsonp',
    jsonp:'callback',
    data: params
  });

  if(done) { q.done(done); }
  if(fail) { q.fail(fail); }
}

class LoginForm extends React.Component {
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
        console.error(status, err.toString())
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

class Submissions extends React.Component {
  constructor(props) {
    super(props)
  }

  getInitialState() {
    return {
      submissions: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const username = nextProps.user.username;
    const sid = nextProps.user.sid;

    this.updateSubmissions(username, sid);
  }

  componentDidMount() {
    const username = this.props.user.username;
    const sid = this.props.user.sid;

    this.updateSubmissions(username, sid);
  }

  updateSubmissions(username, sid) {
    ib_query(
      'https://inkbunny.net/api_search.php',
      {sid:sid, username:username, page:'1'},
      (data) => {
        this.setState({submissions:data.submissions})
      }
    );
  }

  render() {
    let submissions = null;
    if(this.state) {
      submissions = _.map(this.state.submissions, (x) => {
        const src = x.thumbnail_url_small;
        console.log(src);
        return (
          <img src={src} alt={x.title} />
        );
      });
    }

    return (
      <div>{submissions}</div>
    )
  }
}

class Test extends React.Component {
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
        <LoginForm onUpdate={this.onUserUpdate.bind(this)}/>
        <Submissions user={this.state.user} />
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('content'));