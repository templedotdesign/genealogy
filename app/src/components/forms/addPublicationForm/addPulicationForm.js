//Core
import React, { Component } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../../constants/firebase/firebase';
import { PUBLICATION_TYPES } from '../../../constants/publicationTypes/publicationTypes';

class AddPublicationForm extends Component {
  state = {
    name: '',
    type: '',
    price: '',
    tax: '',
    shipping: ''
  }

  handleChange = (e, key) => {
    this.setState({ ...this.state, [key]: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    const publication = {
      name: this.state.name,
      type: this.state.type,
      price: this.state.price,
      tax: this.state.tax,
      shipping: this.state.shipping
    }
    axios.post(`${BASE_URL}publications.json`, publication)
    .then(res => {
      console.log('publication added successfully');
      this.resetState();
    })
    .catch(err => {
      console.log(err);
    })

  }

  resetState = () => {
    this.setState({
      ...this.state,
      name: '',
      type: '',
      price: '',
      tax: '',
      shipping: ''
    })
  }

  logState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Add Publication Form</h1>
        <label>Name: </label>
        <input type='text' value={this.state.name} onChange={(e) => this.handleChange(e, 'name')}/><br/>
        <label>Type: </label>
        <select value={this.state.type} onChange={(e) => this.handleChange(e, 'type')}>
          {PUBLICATION_TYPES.map(type => {
            return (
              <option key={type.value} value={type.value}>{type.name}</option>
            )
          })}
        </select><br/>
        <label>Price: </label>
        <input type='text' value={this.state.price} onChange={(e) => this.handleChange(e, 'price')}/><br/>
        <label>Tax: </label>
        <input type='text' value={this.state.tax} onChange={(e) => this.handleChange(e, 'tax')}/><br/>
        <label>Shipping: </label>
        <input type='text' value={this.state.shipping} onChange={(e) => this.handleChange(e, 'shipping')}/><br/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default AddPublicationForm;