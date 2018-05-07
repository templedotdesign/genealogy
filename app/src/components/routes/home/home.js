//Core
import React, { Component } from 'react';

//CSS
import classes from './home.css';

class Home extends Component {
  render() {
    return (
      <div className={classes.home}>
        <h1>Welcome To The Hardin County Genealogy Society</h1>
        <h1>And</h1>
        <h1>Robert Reed Genealogy Library</h1>
      </div>
    )
  }
}

export default Home;