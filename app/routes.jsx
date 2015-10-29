'use strict';
import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Page2 from './components/Page2.jsx';

module.exports = (
  <Route path='/' component={Main} >
    <IndexRoute component={Home} />
    <Route path="/page2" component={Page2} />
  </Route>
);