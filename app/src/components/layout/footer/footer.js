//Core
import React from 'react';

//CSS
import classes from './footer.css';

const footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <p>Stop By!</p>
        <p>The center is located 1 block west of the Court House, and is right next to the cinema.</p>
        <p>211 W Franklin St.</p>
        <p>Kenton, OH 43326</p>
      </div>
      <div className={classes.center}>
        <p>Hours Of Operation</p>
        <p>Wednesday: 1 - 5pm</p>
        <p>Thursday: 1 - 5pm</p>
        <p>Or By Appointment</p>
      </div>
      <div className={classes.right}>
        <p>Get In Touch!</p>
        <p>(419) 674-4088</p>
        <p>ehardincountyg@columbus.rr.com</p>
        <p>211 W Franklin St</p>
        <p>PO Box 520</p>
        <p>Kenton, OH  43326</p>
      </div>
      <div className={classes.outoftown}>
        <p>Out of town visitors - If you are planning a trip to Hardin County, and our hours do not fit your needs, please let us know.  We can open our doors at other times upon special request.</p>
        <p>Please contact Kathy Hines for arrangements.</p>
        <p>Center phone: 419-674-4088 Cell phone: 419-788-9030</p>
        <p>Email: kathyhines326@hotmail.com</p>
      </div>
      <div className={classes.copyright}>
        <p>&copy; {new Date().getFullYear()} The Hardin County Genealogy Society</p>
        <p>Created By Temple Design Solutions</p>
      </div> 
    </div>
  )
}

export default footer;