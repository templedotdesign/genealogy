//Core
import React, { Component } from 'react';

class Center extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <div>
        <h1>Center Route</h1>
      </div>
    )
  }
}

export default Center;