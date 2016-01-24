// GLOBAL CONSTANTS
// -----------------------------------
const Constants = {
  accessTokens: {
  },

  links: {
  }
};

require(['jquery'], function($) {
  $(function() {
    let parser=document.createElement('a');
    parser.href = window.location.href;
    Constants.links.app_root = "/ib-react/app";
  });
});

