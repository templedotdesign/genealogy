//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import classes from './sideDrawer.css';

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.sideDrawer];
  if(props.hidden) {
    sideDrawerClasses.push(classes.hidden);
  }
  return (
    <div className={sideDrawerClasses.join(' ')}>
      <NavLink to='/' onClick={props.clicked} activeClassName={classes.active} exact>Home</NavLink>
      <NavLink to='/center' onClick={props.clicked} activeClassName={classes.active}>The Center</NavLink>
      <NavLink to='/publications' onClick={props.clicked} activeClassName={classes.active}>Publications</NavLink>
      <NavLink to='/pioneer-families' onClick={props.clicked} activeClassName={classes.active}>Pioneer Families</NavLink>
      <NavLink to='/links' onClick={props.clicked} activeClassName={classes.active}>Links</NavLink>
      <NavLink to='/research-aids' onClick={props.clicked} activeClassName={classes.active}>Research Aids</NavLink>
      <NavLink to='/member-pages' onClick={props.clicked} activeClassName={classes.active}>Member Pages</NavLink>
      <NavLink to='/military' onClick={props.clicked} activeClassName={classes.active}>Military</NavLink>
      <NavLink to='/queries' onClick={props.clicked} activeClassName={classes.active}>Queries</NavLink>
      <NavLink to='/reunions' onClick={props.clicked} activeClassName={classes.active}>Reunions</NavLink>
      <NavLink to='/adopt-a-book' onClick={props.clicked} activeClassName={classes.active}>Adopt A Book</NavLink>
      <NavLink to='/pioneer-association' onClick={props.clicked} activeClassName={classes.active}>Pioneer Association</NavLink>
    </div>
  )
}

export default sideDrawer;