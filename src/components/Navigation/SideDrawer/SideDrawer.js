import React from 'react';
import Logo from '../../Logo/Logo';
import NavList from '../NavItem/NavList';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  // ....
  
  return(
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavList/>
      </nav>
    </div>
  );
}


export default sideDrawer;