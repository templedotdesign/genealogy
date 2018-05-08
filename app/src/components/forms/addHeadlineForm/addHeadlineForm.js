//Core
import React, { Component } from 'react';
import axios from 'axios';

//Constants
import { BASE_URL } from '../../../constants/firebase/firebase';
import { FONT_SIZES } from '../../../constants/fontSizes/fontSizes';

class AddHeadlineForm extends Component {
  state = {
    content: '',
    size: '',
    color: ''
  }

  handleChange = (e, key) => {
    this.setState({ ...this.state, [key]: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    const headline = {
      content: this.state.content,
      size: this.state.size,
      color: this.state.color
    }
    axios.post(`${BASE_URL}headlines.json`, headline)
    .then(res => {
      console.log('headline added successfully');
      this.resetState();
    })
    .catch(err => {
      console.log(err);
    })

  }

  resetState = () => {
    this.setState({
      ...this.state,
      content: '',
      size: '',
      color: ''
    })
  }

  logState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Add Headline Form</h1>
        <label>Content: </label>
        <input type='text' value={this.state.content} onChange={(e) => this.handleChange(e, 'content')}/><br/>
        <label>Size: </label>
        <select value={this.state.size} onChange={(e) => {this.handleChange(e, 'size')}}>
          {FONT_SIZES.map(x => {
            return (
              <option key={x.value} value={x.value}>{x.name}</option>
            )
          })}
        </select><br/>
        <label>Color: </label>
        <input type='color' value={this.state.color} onChange={(e) => this.handleChange(e, 'color')}/><br/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export default AddHeadlineForm;