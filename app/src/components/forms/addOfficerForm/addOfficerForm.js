//Core
import React, { Component } from 'react';
import axios from 'axios';

//Constants
import { BASE_URL } from '../../../constants/firebase/firebase';
import { OFFICER_TYPES } from '../../../constants/officerTypes/officerTypes';

class AddHeadlineForm extends Component {
  state = {
    name: '',
    email: '',
    post: ''
  }

  handleChange = (e, key) => {
    this.setState({ ...this.state, [key]: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    const officer = {
      name: this.state.name,
      email: this.state.email,
      post: this.state.post
    }
    axios.post(`${BASE_URL}officers.json`, officer)
    .then(res => {
      console.log('officer added successfully');
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
      email: '',
      post: ''
    })
  }

  logState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Add Officer Form</h1>
        <label>Name: </label>
        <input type='text' value={this.state.name} onChange={(e) => this.handleChange(e, 'name')}/><br/>
        <label>Email: </label>
        <input type='email' value={this.state.email} onChange={(e) => this.handleChange(e, 'email')}/><br/>
        <label>Post: </label>
        <select value={this.state.post} onChange={(e) => {this.handleChange(e, 'post')}}>
          {OFFICER_TYPES.map(x => {
            return (
              <option key={x.value} value={x.value}>{x.name}</option>
            )
          })}
        </select><br/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default AddHeadlineForm;