//Core
import React, { Component } from 'react';

//Components
import AddPublicationForm from '../../forms/addPublicationForm/addPulicationForm';
import AddHeadlineForm from '../../forms/addHeadlineForm/addHeadlineForm';
import AddOfficerForm from '../../forms/addOfficerForm/addOfficerForm';

class Admin extends Component {
  render() {
    return (
      <div>
        <AddPublicationForm/>
        <br/>
        <br/>
        <AddHeadlineForm/>
        <br/>
        <br/>
        <AddOfficerForm/>
      </div>
    )
  }
}

export default Admin;