'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Table, ButtonGroup, Button, Popover, Overlay, OverlayTrigger, Modal, Tooltip } from 'react-bootstrap';

import { ib_query } from './utils';

class Picture extends React.Component {
  render() {
    return(
      <img style={this.props.style} className="img-responsive" src={this.props.src} />
    )
  }
}

export class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
    }
  }

  componentWillMount() {
    const sid = window.localStorage.getItem('sid');
    const submission_id = this.props.submission_id;

    ib_query(
      'https://inkbunny.net/api_submissions.php',
      //{sid:this.state.sid, username:username, page:1, get_rid:'yes'},
      {sid:sid, submission_ids:submission_id, show_description:'yes'},
      (data) => {
        this.setState({
          description: data.submissions[0].description,
        });
      }
    );
  }

  render() {
    return(
      <div style={{color:'black'}}>
        {this.state.description}
      </div>
    );
  }
}

export class SubmissionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showPopover: false,
      opacity: 1,
    }
  }

  toggleDescription() {
    if(this.state.opacity == 1) {
      this.setState({opacity:0.2});
    } else {
      this.setState({opacity:1});
    }
  }

  render() {
    const src = this.props.item.thumbnail_url_large;
    return (
      <div style={{display:'inline-block', position:'relative'}}>
        <img src={src} alt={this.props.item.title} ref='target'
           onClick={e => this.setState({showModal:true})}
           onMouseEnter={e => this.setState({showPopover:true})}
           onMouseLeave={e => this.setState({showPopover:false})} />
        <Overlay show={this.state.showPopover}
                 placement='bottom'
                 container={this}
                 target={() => ReactDOM.findDOMNode(this.refs.target)}>
          <Tooltip placement="bottom">
            <span>{this.props.item.title}</span><br />
            <span className="text-info">by {this.props.item.username}</span>
          </Tooltip>
        </Overlay>
        <Modal show={this.state.showModal}
               bsSize="large"
               onHide={e => this.setState({showModal:false})}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Grid fluid={true}>
                <Col xs={8}>
                  <span>{this.props.item.title}</span>
                </Col>
                <Col xs={4}>
                  <ButtonGroup>
                    <Button bsStyle='default' onClick={this.toggleDescription.bind(this)} ><i className="fa fa-info" /></Button>
                    <a className="btn btn-default" href={this.props.item.file_url_full} target="_blank">
                      <i className="fa fa-expand" />
                    </a>
                  </ButtonGroup>
                </Col>
              </Grid>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{position:'relative'}}>
            <Picture style={{'opacity':this.state.opacity}} src={this.props.item.file_url_full} />
            <div style={{position:'absolute', top:"0", opacity:1-this.state.opacity}}>
              <Description submission_id={this.props.item.submission_id} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <p>by {this.props.item.username}</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
