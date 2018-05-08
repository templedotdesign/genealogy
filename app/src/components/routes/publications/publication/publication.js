//Core
import React from 'react';

//CSS
import classes from './publication.css';

const publication = (props) => {
  return (
    <div className={classes.publication}>
      <h3>{props.data.name}</h3>
      <div>
        <p>Price: {props.data.price}</p>
        <p>Tax: {props.data.tax}</p>
        <p>S/H: {props.data.shipping}</p>
      </div>
    </div>
  )
}

export default publication;
