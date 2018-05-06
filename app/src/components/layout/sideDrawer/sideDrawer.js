import React from 'react';
import classes from './sideDrawer.css';

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.sideDrawer];
  if(props.hidden) {
    sideDrawerClasses.push(classes.hidden);
  }
  return (
    <div className={sideDrawerClasses.join(' ')}>
      <p>Home</p>
      <p>The Center</p>
      <p>Publications</p>
      <p>Home</p>
      <p>Pioneer Families</p>
      <p>Links</p>
      <p>Research Aids</p>
      <p>Member Pages</p>
      <p>Military</p>
      <p>Queries</p>
      <p>Reunions</p>
      <p>Adopt A Book</p>
      <p>Pioneer Association</p>
    </div>
  );
}

export default sideDrawer;