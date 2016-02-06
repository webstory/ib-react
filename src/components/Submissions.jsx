'use strict';
import React from 'react';
import _ from 'lodash';

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
    if(page > this.state.pages || page > 3) {
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
        // const src = x.thumbnail_url_small;

        return (
          <SubmissionItem item={x} />
        );
      });
    }

    return (
      <div>{submissions}</div>
    )
  }
}
