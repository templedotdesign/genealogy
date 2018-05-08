//Core
import React, { Component } from 'react';

//CSS
import classes from './links.css';

class Links extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <div className={classes.links}>
        <h1>Links</h1>
        <div className={classes.button}>
          <a href='https://www.ohiohistory.org/' target='_blank' rel='noopener noreferrer'>Ohio Historical Society Archives</a>
        </div>
        <p>Includes A Searchable Database Of Ohio Deaths From 1913 - 1937</p>
        <div className={classes.button}>
          <a href='http://heritagepursuit.com/' target='_blank' rel='noopener noreferrer'>Heritage Pursuit</a>
        </div>
        <p>A Searchable Site Containing Some Ohio County History Publications By Beers In The 1890's - An Invaluable Resource For Information On Early Settlers.</p>
        <div className={classes.button}>
          <a href='https://bcgcertification.org/certification/' target='_blank' rel='noopener noreferrer'>Why Certify</a>
        </div>
        <p>Would You Like To Become A Certified Genealogist?  Take A Look And See If You Have "What It Takes" And Find Out How To Get Your Certification. </p>
        <div className={classes.button}>
          <a href='http://www.kentontimes.com/' target='_blank' rel='noopener noreferrer'>Kenton Times</a>
        </div>
        <p>Online Newspaper</p>
        <div className={classes.button}>
          <a href='http://www.adaherald.com/' target='_blank' rel='noopener noreferrer'>Ada Herald</a>
        </div>
        <p>Online Newspaper</p>
        <div className={classes.button}>
          <a href='https://www.oplin.ohio.gov/' target='_blank' rel='noopener noreferrer'>Ohio Public Library Information Network (OPLIN)</a>
        </div>
        <p>Listing Of Hardin County, Ohio Public School District Web Sites</p>
        <br/><br/><br/>
      </div>
      
    )
  }
}

export default Links;