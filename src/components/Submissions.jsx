'use strict';
import React from 'react';
import _ from 'lodash';

import { Grid, Button } from 'react-bootstrap';

import { SubmissionItem } from './SubmissionItem';
import { SubmissionModal } from './SubmissionModal';
import { ib_query } from './utils';

export class Submissions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submissions: [],
      submissionModal: null,
      fetching: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.fetchFirstPageSubmissions(nextProps.user);
  }

  componentDidMount() {
    this.fetchFirstPageSubmissions(this.props.user);
  }

  fetchFirstPageSubmissions(user) {
    this.setState({fetching:true});
    ib_query(
      'https://inkbunny.net/api_search.php',
      //{sid:this.state.sid, username:username, page:1, get_rid:'yes'},
      //{sid:this.state.sid, unread_submissions:'yes', page:1, get_rid:'yes'},
      {sid:user.sid, favs_user_id:user.user_id, submissions_per_page:50, orderby:"fav_datetime", get_rid:'yes'},
      (data) => {
        this.setState({
          submissions:data.submissions,
          loaded_page: 1,
          pages:data.pages_count,
          rid:data.rid,
        });
        this.setState({fetching:false});
      }
    );
  }

  fetchNextPageSubmissions() {
    const user = this.props.user;
    const page = this.state.loaded_page + 1;
    if(page > this.state.pages) {
      return;
    }

    this.setState({fetching:true});
    ib_query(
      'https://inkbunny.net/api_search.php',
      {sid:user.sid, rid:this.state.rid, submissions_per_page:50, page:page},
      (data) => {
        const submissions = _.concat(this.state.submissions, data.submissions);
        this.setState({submissions:submissions, loaded_page:page});
        this.setState({fetching:false});
      }
    );
  }

  hideModal() {
    this.setState({submissionModal:null});
  }

  showModal(item) {
    const modal = <SubmissionModal key={item.submission_id} item={item} onClose={this.hideModal.bind(this)}/>

    this.setState({submissionModal:modal});
  }

  render() {
    const showModal = this.showModal.bind(this);
    const submissions = _.map(this.state.submissions, (x) => {
      return (
        <SubmissionItem key={x.submission_id} item={x} onClick={showModal} />
      );
    });

    return (
      <div>
        <div>{submissions}</div>
        <div>{this.state.submissionModal}</div>
        <Grid fluid={true}>
          <Button bsStyle="success" disabled={this.state.fetching} block onClick={this.fetchNextPageSubmissions.bind(this)}>{this.state.fetching ? "Fetching..." : "Read more"}</Button>
        </Grid>
      </div>
    )
  }
}
