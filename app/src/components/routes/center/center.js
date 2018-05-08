//Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import classes from './center.css';

class Center extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <div className={classes.center}>
        <h1>About The Center</h1>
        <p>
          Our building was donated to us by Robert G. Reed, Jr. in 2003.  We are very grateful to him and to 
          all other people who have donated money, items, and time to make our center the best that it can be.
        </p>
        <div className={classes.buttons}>
          <NavLink to='/tour'>Take A Tour</NavLink>
          <NavLink to='/schedule'>Schedule Of Events</NavLink>
          <NavLink to='/membership'>Membership Information</NavLink>
        </div>
      </div>
    )
  }
}

export default Center;