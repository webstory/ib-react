'use strict';
import $ from 'jquery';

export function ib_query(url, params, done, fail) {
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
