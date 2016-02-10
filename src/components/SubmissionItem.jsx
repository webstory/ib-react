'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Table, ButtonGroup,
         Button, Popover, Overlay, OverlayTrigger, Modal,
         Tooltip, Fade } from 'react-bootstrap';

import { ib_query } from './utils';

export class SubmissionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopover: false,
      opacity: 1,
    }
  }

  render() {
    const src = this.props.item.thumbnail_url_large;
    const onClick = this.props.onClick;

    return (
      <div style={{display:'inline-block', position:'relative'}}>
        <img src={src} alt={this.props.item.title} ref='target'
           onClick={() => onClick(this.props.item)}
           onMouseEnter={e => this.setState({showPopover:true})}
           onMouseLeave={e => this.setState({showPopover:false})} />
        <Overlay show={this.state.showPopover}
                 placement='bottom'
                 container={this}
                 target={() => ReactDOM.findDOMNode(this.refs.target)}>
          <Tooltip id="tooltip" placement="bottom">
            <span>{this.props.item.title}</span><br />
            <span className="text-info">by {this.props.item.username}</span>
          </Tooltip>
        </Overlay>

      </div>
    );
  }
}
