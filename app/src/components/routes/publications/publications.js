//Core
import React, { Component } from 'react';
import axios from 'axios';

//Components
import Publication from './publication/publication';

//CSS
import classes from './publications.css';

//Constants
import { BASE_URL } from '../../../constants/firebase/firebase';

class Publications extends Component {
  state = {
    publications: []
  }

  componentDidMount() {
    window.scroll(0, 0);
    
    let publications = [];
    axios.get(`${BASE_URL}publications.json`)
    .then(res => {
      for(let key in res.data) {
        publications.push(res.data[key])
      }
      this.setState({...this.state, publications})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className={classes.publications}>
        <h1>Publications</h1>
        <h3>Censuses</h3>
        {this.state.publications.filter(x => {
          return x.type === 'census'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Birth & Death Records</h3>
        {this.state.publications.filter(x => {
          return x.type === 'birth_death_records'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Marriage Records</h3>
        {this.state.publications.filter(x => {
          return x.type === 'marriage_records'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Newspaper Abstracts</h3>
        {this.state.publications.filter(x => {
          return x.type === 'newspaper_abstracts'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>This & That</h3>
        {this.state.publications.filter(x => {
          return x.type === 'this_and_that'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Hardin County History</h3>
        {this.state.publications.filter(x => {
          return x.type === 'hardin_county_history'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Obituary Collections</h3>
        {this.state.publications.filter(x => {
          return x.type === 'obituary_collections'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Cemetery Indexes</h3>
        {this.state.publications.filter(x => {
          return x.type === 'cemetery_indexes'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Atlases</h3>
        {this.state.publications.filter(x => {
          return x.type === 'atlases'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
        <h3>Miscellaneous</h3>
        {this.state.publications.filter(x => {
          return x.type === 'misc'
        }).map(publication => {
          return (
            <Publication key={publication.name} data={publication}/>
          )
        })}
      </div>
    )
  }
}

export default Publications;