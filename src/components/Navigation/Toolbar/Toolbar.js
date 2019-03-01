import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavList from '../NavItem/NavList';
import Menu from '../../Menu/Menu';


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Menu toggle={props.toggleMenu}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavList/>
    </nav>
  </header>
);


export default toolbar;