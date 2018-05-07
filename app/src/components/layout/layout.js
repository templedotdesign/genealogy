//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../wrapper/wrapper';
import Toolbar from './toolbar/toolbar';
import SideDrawer from './sideDrawer/sideDrawer';
import Footer from './footer/footer';

//CSS
import classes from './layout.css';

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
        <SideDrawer hidden={this.state.hideSideDrawer} clicked={this.toggleSideDrawer}/>
        <div className={classes.routeWrapper}>
          {this.props.children}
        </div>
        <Footer/>  
      </Wrapper>
    )
  }
}

export default Layout;