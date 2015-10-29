import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Learn Webpack</div>
        <Link to="/page2">Click Here</Link>
      </div>
    );
  }
}

export default Home;