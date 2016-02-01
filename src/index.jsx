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
    super(props);

    this.state = {
      submissions: []
    }
  }

  componentWillMount() {
    const sid = window.localStorage.getItem("sid");

    this.setState({sid:sid});
  }

  componentDidMount() {
    const username = this.props.username;

    this.fetchFirstPageSubmissions(username);
  }

  fetchFirstPageSubmissions(username) {
    ib_query(
      'https://inkbunny.net/api_search.php',
      {sid:this.state.sid, username:username, page:1, get_rid:'yes'},
      (data) => {
        this.setState({
          submissions:data.submissions,
          pages:data.pages_count,
          rid:data.rid,
        });
        if(data.pages_count > 1) {
          this.fetchNextPageSubmissions(2);
        }
      }
    );
  }

  fetchNextPageSubmissions(page) {
    if(page > this.state.pages) {
      return;
    }

    ib_query(
      'https://inkbunny.net/api_search.php',
      {sid:this.state.sid, rid:this.state.rid, page:page},
      (data) => {
        const submissions = _.concat(this.state.submissions, data.submissions);
        this.setState({submissions:submissions});
        this.fetchNextPageSubmissions(page+1);
      }
    );
  }

  render() {
    let submissions = null;
    if(this.state) {
      submissions = _.map(this.state.submissions, (x) => {
        const src = x.thumbnail_url_small;
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
        <Submissions username={this.state.user.username} />
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('content'));