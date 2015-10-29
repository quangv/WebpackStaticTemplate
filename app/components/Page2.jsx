import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

class Page2 extends Component {
  render() {
    return (
      <div>
        <div>Router is working</div>
        <Link to="/">Go home, are you too good for your home?</Link>
      </div>
    );
  }
}

export default Page2;