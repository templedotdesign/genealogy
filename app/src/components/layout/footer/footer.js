//Core
import React from 'react';

//CSS
import classes from './footer.css';

const footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <p>Stop By!</p>
        <p>The center is located 1 block west of the Court House,</p> 
        <p>and is right next to the cinema.</p>
        <p>211 W Franklin St.</p>
        <p>Kenton, OH 43326</p>
      </div>
      <div className={classes.right}>
        <p>Get In Touch!</p>
        <p>(419) 674-4088</p>
        <p>ehardincountyg@columbus.rr.com</p>
        <p>211 W Franklin St</p>
        <p>PO Box 520</p>
        <p>Kenton, OH  43326</p>
      </div>
      <div className={classes.copyright}>
        <p>&copy; {new Date().getFullYear()} The Hardin County Genealogy Society</p>
        <p>Created By Temple Design Solutions</p>
      </div> 
    </div>
  )
}

export default footer;