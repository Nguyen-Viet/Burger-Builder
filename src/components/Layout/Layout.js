import React, {Component} from 'react';
import Helper from '../../hoc/Helper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

  state = {
    showSideDrawer: false
  }


  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer:false});
  }

  toggleMenu = () => {
    this.setState( (prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render () {
    return (
      <Helper>  
        <Toolbar toggleMenu={this.toggleMenu}/>
        <SideDrawer
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Helper>
    );
  }

} 



export default Layout;