import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavList from '../NavItem/NavList';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle toggle={props.toggleMenu}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavList/>
    </nav>
  </header>
);


export default toolbar;