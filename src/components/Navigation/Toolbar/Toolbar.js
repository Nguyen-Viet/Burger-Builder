import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavList from '../NavItem/NavList';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavList/>
    </nav>
  </header>
);


export default toolbar;