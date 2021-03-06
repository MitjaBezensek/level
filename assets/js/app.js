// We need to import the CSS so that webpack will load it.
// The ExtractTextPlugin is used to separate it out into
// its own CSS file.
import css from '../css/app.css';

// webpack automatically concatenates all files in your
// watched paths. Those paths can be configured as
// endpoints in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import * as Main from "./modules/main";
import * as Signup from "./modules/signup";

const moduleNode = document.head.querySelector("meta[name='module']");

if (moduleNode) {
  switch (moduleNode.content) {
    case "main":
      Main.initialize();
      break;

    case "signup":
      Signup.initialize();
      break;

    default:
      break;
  }
}
