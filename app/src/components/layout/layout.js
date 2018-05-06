import React, { Component } from 'react';

import Wrapper from '../wrapper/wrapper';
import Toolbar from './toolbar/toolbar';
import SideDrawer from './sideDrawer/sideDrawer';

class Layout extends Component {
  state = {
    hideSideDrawer: true
  }

  toggleSideDrawer = () => {
    this.setState({...this.state, hideSideDrawer: !this.state.hideSideDrawer});
  }

  render() {
    return (
      <Wrapper>
        <Toolbar clicked={this.toggleSideDrawer}/>
        <SideDrawer hidden={this.state.hideSideDrawer}/>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default Layout;