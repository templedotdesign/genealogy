//Core
import React, { Component } from 'react';

//CSS
import classes from './pioneerFamilies.css';

class PioneerFamilies extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <div className={classes.pioneerFamilies}>
        <h1>Pioneer Families</h1>
        <p>The Deadline For Pioneer Families Submissions Is March 15!!!</p>
        <p>You May Request A Copy Of Your Familiy's Information At The Cost Of $1.00 Per Page.</p>
      </div>
    )
  }
}

export default PioneerFamilies;