'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Panel, Table, ButtonGroup,
         Button, Popover, Overlay, OverlayTrigger, Modal,
         Tooltip, Fade } from 'react-bootstrap';

import { ib_query } from './utils';

class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages:[],
    }
  }

  componentDidMount() {
    let pages = [];
    if(this.props.pagecount == 1) {
      pages.push(<Picture key='primary' className="img-responsive" src={this.props.primary} />);
      this.setState({pages:pages});
    } else {
      const sid = window.localStorage.getItem('sid');
      const submission_id = this.props.submission_id;

      ib_query(
        'https://inkbunny.net/api_submissions.php',
        {sid:sid, submission_ids:submission_id},
        (data) => {
          _.map(data.submissions[0].files, (x) => {
            if(/^image\/.+$/.test(x.mimetype)) {
              pages.push(<Picture key={x.file_id} className="img-responsive" full_src={x.file_url_full} src={x.file_url_screen}/>);
            } else if(/^application\/x-shockwave-flash$/.test(x.mimetype)) {
              pages.push(<FlashMovie key={x.file_id} style={{height:window.innerHeight}} src={x.file_url_full} />);
            }
          });

          this.setState({pages:pages});
        }
      );
    }
  }

  render() {
    return(
      <div style={this.props.style}>
        {this.state.pages}
      </div>
    )
  }
}

class Picture extends React.Component {
  render() {
    return(
      <div style={this.props.style}>
        <a href={this.props.full_src} target="_blank">
          <img className="img-responsive" src={this.props.src} />
        </a>
      </div>
    )
  }
}

class FlashMovie extends React.Component {
  render() {
    return(
      <div style={this.props.style}>
        <object style={{display:'block', width:'100%', height:'100%'}}>
          <param name="movie" value={this.props.src}></param>
          <param name="allowScriptAccess" value="never"></param>
          <embed style={{width:'100%', height:'100%'}} src={this.props.src} type="application/x-shockwave-flash"></embed>
        </object>
        <div style={{'textAlign':'center', color:'#888'}}>
          <a href={this.props.src} target="_blank">download</a>
        </div>
      </div>
    )
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
    }
  }

  componentDidMount() {
    const sid = window.localStorage.getItem('sid');
    const submission_id = this.props.submission_id;

    ib_query(
      'https://inkbunny.net/api_submissions.php',
      {sid:sid, submission_ids:submission_id, show_description:'yes', show_description_bbcode_parsed:'yes'},
      (data) => {
        this.setState({
          description: data.submissions[0].description_bbcode_parsed,
        });
      }
    );
  }

  render() {
    return(
      <div style={{color:'black'}} dangerouslySetInnerHTML={{__html:this.state.description}}>
      </div>
    );
  }
}

export class SubmissionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showDescription: false,
      opacity: 1,
    }
  }

  toggleDescription() {
    this.setState({showDescription:!this.state.showDescription});
  }

  componentDidMount() {
    this.setState({showModal:true});
  }

  componentWillUnmount() {
    this.setState(
      {showModal:false},
      () => setTimeout(this.props.onClose, 1000)
    );
  }

  render() {
    const src = this.props.item.thumbnail_url_large;
    return (
      <Modal show={this.state.showModal}
             bsSize="large"
             onHide={this.componentWillUnmount.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Grid fluid={true}>
              <Col xs={10}>
                <span>{this.props.item.title}</span>
              </Col>
              <Col xs={2}>
                <ButtonGroup>
                  <Button bsStyle='default' onClick={this.toggleDescription.bind(this)} ><i className="fa fa-info" /></Button>
                </ButtonGroup>
              </Col>
            </Grid>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{position:'relative'}}>
          <Pages style={{'opacity':this.state.showDescription ? 0.2 : 1}}
                  pagecount={this.props.item.pagecount}
                  primary={this.props.item.file_url_full}
                  submission_id={this.props.item.submission_id}/>
          { this.state.showDescription ? (
            <Fade in={this.state.showDescription}>
              <div style={{position:'absolute', top:"0"}}>
                <Description submission_id={this.props.item.submission_id} />
              </div>
            </Fade>
          ):null}
        </Modal.Body>
        <Modal.Footer>
          <p>by {this.props.item.username}</p>
        </Modal.Footer>
      </Modal>
    );
  }
}
