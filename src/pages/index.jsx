'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Table, Button } from 'react-bootstrap';
import _ from 'lodash';
import $ from 'jquery';

class Test extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}

React.render(<Test />, document.getElementById('content'));