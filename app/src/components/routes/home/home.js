//Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

//Components
import Headline from './headline/headline';

//CSS
import classes from './home.css';

//Constants
import { BASE_URL } from '../../../constants/firebase/firebase';

class Home extends Component {
  state = {
    headlines: [],
    officers: []
  }

  componentDidMount() {
    window.scroll(0, 0);
    
    let headlines = [];
    axios.get(`${BASE_URL}headlines.json`)
    .then(res => {
      for(let key in res.data) {
        headlines.push(res.data[key])
      }
      this.setState({...this.state, headlines})
    })
    .catch(err => {
      console.log(err)
    })
    let officers = [];
    axios.get(`${BASE_URL}officers.json`)
    .then(res => {
      for(let key in res.data) {
        officers.push(res.data[key])
      }
      this.setState({...this.state, officers})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className={classes.home}>
        <div className={classes.banner}></div>
        <h1>Welcome To The Hardin County Genealogy Society</h1>
        <h1>And</h1>
        <h1>Robert Reed Genealogy Library</h1>
        <div style={{marginTop: '100px'}}>
          {this.state.headlines.map(headline => {
            return (
              <Headline size={headline.size} color={headline.color} content={headline.content}/>
            )
          })}
        </div>
        <h2 style={{marginTop: '60px', fontSize: '3em', textAlign: 'center'}}>Our Officers For 2018</h2>
        <div style={{margin: '40px 0', textAlign: 'center'}}>
          {this.state.officers.map(officer => {
            return (
              <div key={officer.post} style={{fontSize: '2em', width: '40vw', margin: '20px auto'}}>
                <p style={{fontWeight: 'bold'}}>{officer.post}</p>
                <hr/>
                <p>{officer.name}</p>
                <p>{officer.email}</p>
              </div>
            )
          })}
        </div>
        <div style={{textAlign: 'center', fontSize: '1.5em', width: '60vw', margin: '0 auto'}}>
        <p>Our officers are dedicated to making the center the best that it can be.  We are proud to represent Hardin County and it's many citizens and ancestors.</p>
        <p>It is always nice to put a face to a name.</p>
        </div>
        <div className={classes.link}>
          <NavLink to='/officers'>Meet Our Officers</NavLink>
        </div>
        <div style={{textAlign: 'center', fontSize: '1.5em', width: '60vw', margin: '0 auto'}}>
        <p>No organization can run without the work of volunteers.  In addition to our hard-working officers, we have several dedicated volunteers, who cheerfully give their time to the center to keep it running and to assist others in their research.</p>
        </div>
        <div className={classes.link}>
          <NavLink to='/volunteers'>Meet Some Of Our Volunteers</NavLink>
        </div>
       
      </div>
    )
  }
}

export default Home;