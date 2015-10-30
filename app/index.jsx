require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RoutingContext, match } from 'react-router';

import routes from './routes.jsx'

// Client render (optional):
if (typeof document !== 'undefined') {
  const history = createHistory();
  const outlet = document.getElementById('app');

  document.body.appendChild(outlet);

  ReactDOM.render(<Router history={history} routes={routes} />, outlet);
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    var html = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />)
    callback(null, html);
  });
};




