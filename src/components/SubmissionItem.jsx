'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Table, Button, Popover, Overlay, OverlayTrigger, Modal } from 'react-bootstrap';


class Picture extends React.Component {
  render() {
    return(
      <img className="img-responsive" src={this.props.src} />
    )
  }

}

export class SubmissionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showPopover: false,
    }
  }

  componentDidMount() {

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
          <Popover title={this.props.item.title}>
            <p>by {this.props.item.username}</p>
          </Popover>
        </Overlay>
        <Modal show={this.state.showModal}
               bsSize="large"
               onHide={e => this.setState({showModal:false})}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href={this.props.item.file_url_full} target="_blank">
              <Picture src={this.props.item.file_url_full} />
            </a>
          </Modal.Body>
          <Modal.Footer>
            <p>by {this.props.item.username}</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
