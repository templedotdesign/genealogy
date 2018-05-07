//Core
import React from 'react';

//CSS
import classes from './toolbar.css';

const toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <p onClick={props.clicked}><i className="fas fa-bars"></i></p> 
     <h1>The Hardin County Genealogy Society</h1>
    </div>
  )
}

export default toolbar;