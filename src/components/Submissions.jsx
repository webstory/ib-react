'use strict';
import React from 'react';
import _ from 'lodash';

import { Grid, Button } from 'react-bootstrap';

import { SubmissionItem } from './SubmissionItem';
import { ib_query } from './utils';

export class Submissions extends React.Component {
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
      //{sid:this.state.sid, username:username, page:1, get_rid:'yes'},
      {sid:this.state.sid, unread_submissions:'yes', page:1, get_rid:'yes'},
      (data) => {
        this.setState({
          submissions:data.submissions,
          loaded_page: 1,
          pages:data.pages_count,
          rid:data.rid,
        });
      }
    );
  }

  fetchNextPageSubmissions() {
    const page = this.state.loaded_page + 1;
    if(page > this.state.pages) {
      return;
    }

    ib_query(
      'https://inkbunny.net/api_search.php',
      {sid:this.state.sid, rid:this.state.rid, page:page},
      (data) => {
        const submissions = _.concat(this.state.submissions, data.submissions);
        this.setState({submissions:submissions, loaded_page:page});
      }
    );
  }

  render() {
    const submissions = _.map(this.state.submissions, (x) => {
      // const src = x.thumbnail_url_small;

      return (
        <SubmissionItem item={x} />
      );
    });

    return (
      <div>
        <div>{submissions}</div>
        <Grid fluid={true}>
          <Button bsStyle="success" block onClick={this.fetchNextPageSubmissions.bind(this)}>Read more</Button>
        </Grid>
      </div>
    )
  }
}
