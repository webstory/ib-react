'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Alert, Button } from 'react-bootstrap';
import _ from 'lodash';
import $ from 'jquery';
import io from 'socketio';

const Constants = {
  links: {
    srv_url: 'https://localhost'
  }
}

let target = "";
const socket = io.connect(Constants.links.srv_url, {path:'/droneworld/ws'});

export class DroneList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}

class DroneControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  sendCmd() {
    console.log("Send ping to "+target);

    socket.emit("command", {"sender":"hoya1", "from":"1004395769585311", "to":target, "message":""});
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.sendCmd.bind(this)}>Ping</Button>
      </div>
    );
  }
}

export class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "disconnected",
      message: "",
      //pings: []
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    socket.on('connect', () => {
      this.setState({status:"connected"});
      socket.emit("join", {"client":"hoya1", "room":"1004395769585311", "message":""});
    });

    socket.on('connect_error', (e) => {
      this.setState({status:"connect error"});
    });

    socket.on('connect_timeout', () => {
      this.setState({status:"connect timeout"});
    });

    socket.on('reconnecting', (n) => {
      this.setState({status:`reconnecting(${n})...`});
    });

    socket.on('message', (data) => {
      this.setState({message:data.data});
    });

    socket.on('join', (data) => {
      this.setState({status:`joined: ${data.room}`});
    })

    socket.on('heartbeat', (m) => {
      this.setState({ping: JSON.stringify(m)});
      if(m && m.from) {
        target = m.from;
      }
    });
  }

  render() {
    // const pings = this.state.pings.map((m) => {
    //   return (
    //     <p>{JSON.stringify(m)}</p>
    //   )
    // });
    return (
      <div>
        <p>{this.state.status}</p>
        <p>{this.state.message}</p>
        <p>{this.state.ping}</p>
        <DroneControl />
      </div>
    );
  }
}
