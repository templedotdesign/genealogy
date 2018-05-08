//Core
import React from 'react';

//CSS
import classes from './overlay.css';

const overlay = (props) => {
  let overlayClasses = [classes.overlay];
  if(props.hidden) {
    overlayClasses.push(classes.hidden);
  }
  return (
    <div className={overlayClasses.join(' ')} onClick={props.clicked}></div>
  )
}

export default overlay;